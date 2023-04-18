import { get } from 'svelte/store';
import { location } from './nav/location';
import { writable, type Writable } from 'svelte/store';
import { supabase } from './supabase';

const all_messages: Writable<{
	[server_id: string]: {
		name: string;
		loaded: boolean;
		channels: {
			[channel_id: string]: {
				name: string;
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
	all_messages.update((prev) => {
		prev[loc['server']]['channels'][loc['channel']]['messages'].push({
			name: 'Greatname tho',
			message: message
		});
		return prev;
	});

	let { data, error } = await supabase.from('messages').insert([
		{
			channel_id: loc['channel'],
			server_id: loc['server'],
			name: 'Greatname tho',
			message: message
		}
	]);
	if (error) {
		get(all_messages)[loc['server']]['channels'][loc['channel']]['messages'].pop();
		throw error;
	}
}

supabase
	.channel('messages')
	.on('postgres_changes', { event: '*', schema: 'public', table: 'messages' }, (payload: any) => {
		all_messages.update((prev) => {
			prev[payload.new['server_id']]['channels'][payload.new['channel_id']]['messages'].push({
				name: payload.new['name'],
				message: payload.new['message']
			});
			return prev;
		});
	})
	.subscribe();

export { sendMessage, all_messages };
