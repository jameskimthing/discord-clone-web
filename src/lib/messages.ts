import { get } from 'svelte/store';
import { location } from './nav/location';
import { writable, type Writable } from 'svelte/store';
import { supabase } from './supabase';
import { username } from './users';
import type { RealtimeChannel } from '@supabase/supabase-js';

const all_messages: Writable<{
	[server_id: string]: {
		name: string;
		loaded: boolean;
		channels: {
			[channel_id: string]: {
				name: string;
				loaded: boolean;
				users: Set<string>;
				messages: {
					name: string;
					message: string;
				}[];
			};
		};
	};
}> = writable({});

async function sendMessage(message: string) {
	const loc = get(location);
	const name = get(username);

	all_messages.update((prev) => {
		prev[loc['server']]['channels'][loc['channel']]['messages'].push({
			name: name,
			message: message
		});
		prev[loc['server']]['channels'][loc['channel']]['users'].add(name);
		return prev;
	});

	let { data, error } = await supabase.from('messages').insert([
		{
			channel_id: loc['channel'],
			server_id: loc['server'],
			name: name,
			message: message
		}
	]);
	if (error) {
		get(all_messages)[loc['server']]['channels'][loc['channel']]['messages'].pop();
		throw error;
	}
}

let subscription: RealtimeChannel;
function startSubscribe() {
	subscription = supabase
		.channel('messages')
		.on('postgres_changes', { event: '*', schema: 'public', table: 'messages' }, (payload: any) => {
			all_messages.update((prev) => {
				prev[payload.new['server_id']] ??= { name: 'loading...', loaded: false, channels: {} };
				prev[payload.new['server_id']]['channels'][payload.new['channel_id']] ??= {
					name: 'loading...',
					loaded: false,
					users: new Set(),
					messages: []
				};

				const users =
					prev[payload.new['server_id']]['channels'][payload.new['channel_id']]['users'];
				const messages =
					prev[payload.new['server_id']]['channels'][payload.new['channel_id']]['messages'];
				const toPush = {
					name: payload.new['name'],
					message: payload.new['message']
				};

				if (JSON.stringify(messages[messages.length - 1]) !== JSON.stringify(toPush)) {
					messages.push(toPush);
					users.add(payload.new['name']);
				}
				return prev;
			});
		})
		.subscribe();
}

export { sendMessage, all_messages, startSubscribe };
