import { get } from 'svelte/store';
import { location } from './location';
import { all_messages } from '$lib/messages';
import { supabase } from '$lib/supabase';
import { isLoadingChannels, isLoadingMessages, isLoadingServers } from './loading';

async function gotoServer(server_id: string) {
	let defaultChannel: string;

	console.log('Go to server: ' + server_id);

	const messages = get(all_messages);
	if (!messages[server_id]['loaded']) {
		isLoadingChannels.set(true);
		// messages[server_id]['loaded'] = true;

		console.log(server_id);
		let { data: channels, error } = await supabase
			.from('channels')
			.select('name,id')
			.eq('server_id', server_id);
		if (error) throw error;

		all_messages.update((prev) => {
			channels!.forEach((channel) => {
				if (!defaultChannel) defaultChannel = channel.id;

				prev[server_id]['channels'][channel.id] = {
					loaded: false,
					users: new Set(),
					name: channel.name,
					messages: []
				};
			});

			messages[server_id]['loaded'] = true;
			return prev;
		});
	}
	if (!defaultChannel!) defaultChannel = Object.keys(get(all_messages)[server_id]['channels'])[0];

	location.set({
		server: server_id,
		channel: defaultChannel
	});

	gotoChannel(defaultChannel);
	isLoadingChannels.set(false);
}

async function gotoChannel(channel_id: string) {
	const server_id = get(location)['server'];
	const messages = get(all_messages);

	location.update((prev) => {
		prev['channel'] = channel_id;
		return prev;
	});

	if (!messages[server_id]?.['channels'][channel_id]?.['loaded']) {
		// if ((messages[server_id]?.['channels'][channel_id]?.['messages'] ?? []).length === 0) {
		isLoadingMessages.set(true);

		// get messages of certain channel;
		let { data: messages, error } = await supabase
			.from('messages')
			.select('name,message,id')
			.eq('channel_id', channel_id);
		if (error) throw error;

		// update messages in store;
		all_messages.update((prev) => {
			prev[server_id]['channels'][channel_id]['messages'] = messages!;
			prev[server_id]['channels'][channel_id]['loaded'] = true;
			for (const m of messages!) {
				prev[server_id]['channels'][channel_id]['users'].add(m['name']);
			}
			return prev;
		});
	}

	isLoadingMessages.set(false);
}

export { gotoServer, gotoChannel };
