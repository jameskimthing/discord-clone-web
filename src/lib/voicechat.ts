import { get, writable, type Writable } from 'svelte/store';
import { supabase } from './supabase';
import { username } from './users';
import { location } from './nav/location';
import AgoraRTC from 'agora-rtc-sdk-ng';
import type { RealtimeChannel } from '@supabase/supabase-js';

const voicechat_members: Writable<Set<string>> = writable(new Set());

let subscription: RealtimeChannel;
async function initializeVoiceChat() {
	if (subscription) return;

	const { data: voicechat_users, error } = await supabase
		.from('call_session_users')
		.select('username')
		.eq('server_id', get(location)['server']);
	if (error) throw error;
	voicechat_members.update((prev) => {
		voicechat_users.map((obj) => prev.add(obj.username));
		return prev;
	});

	subscription = supabase
		.channel('call_session_users')
		.on(
			'postgres_changes',
			{ event: '*', schema: 'public', table: 'call_session_users' },
			(payload: any) => {
				console.log('Change!');
				voicechat_members.update((prev) => {
					if (payload.event === 'DELETE') prev.delete(payload.new.username);
					else prev.add(payload.new.username);
					return prev;
				});
			}
		)
		.subscribe();
	console.log('Initialized voice chat!!');
}

let joined = false;
let localAudioTrack: any;
let client: any;
async function joinVoicechat(server_id: string) {
	if (joined) {
		localAudioTrack.stop();
		await client.leave();
		return;
	}
	joined = true;

	console.log('Join voice!');
	const { error } = await supabase
		.from('call_session_users')
		.insert([{ username: get(username), server_id: server_id }]);
	if (error) throw error;

	// Create && join
	client = AgoraRTC.createClient({ mode: 'rtc', codec: 'h264' });
	console.log('Channel: ' + get(location)['server']);
	await client.join(
		import.meta.env.VITE_AGORA_APP_ID,
		// get(location)['server'],
		'best-channel',
		null,
		get(username)
	);

	// Push audio track
	localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();
	await client.publish([localAudioTrack]);

	// subscribe to remote users' audio tracks
	client.on('user-published', async (user: any, mediaType: any) => {
		await client.subscribe(user, mediaType);
		if (mediaType === 'audio') {
			const remoteAudioTrack = user.audioTrack;
			remoteAudioTrack?.play();
		}
	});

	client.on('user-left', (user: any) => {
		voicechat_members.update((prev) => {
			console.log('This here?');
			prev.delete(user.uid as string);
			supabase
				.from('call_session_users')
				.delete()
				.eq('username', user.uid as string);
			return prev;
		});
	});
}

async function leaveVoicechat() {
	// stop the local audio track
	localAudioTrack.stop();

	// leave the channel
	await client.leave();
}

export { initializeVoiceChat, voicechat_members, joinVoicechat };
