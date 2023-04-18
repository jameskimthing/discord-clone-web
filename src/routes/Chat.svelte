<script lang="ts">
	import UserProfile from '$lib/components/UserProfile.svelte';
	import { location } from '$lib/nav/location';
	import { all_messages, sendMessage } from '$lib/messages';
	import { usernameColor } from '$lib/users';
	import { isLoadingChannels, isLoadingMessages } from '$lib/nav/loading';

	let chatMessage: string = '';
	function submitMessage() {
		sendMessage(chatMessage);
		chatMessage = '';
	}

	let chats: { name: string; message: string }[] = [];
	// $: chats = $all_messages?.[$location?.['server']]?.[$location?.['channel']] ?? [];
	$: chats =
		$all_messages[$location['server']]?.['channels'][$location['channel']]?.['messages'] ?? [];
</script>

<div class="w-full h-full bg-dark-3 relative">
	{#if !$isLoadingMessages}
		<div class="absolute bottom-20 w-full top-0 overflow-auto px-5 flex flex-col-reverse">
			<div class="mt-auto">
				{#each chats as chat (chat)}
					<div class="flex flex-row items-center pt-4">
						<UserProfile username={chat['name']} />
						<div class="flex flex-col pl-3">
							<div class="text-sm" style={`color: ${usernameColor(chat['name'])};`}>
								{chat['name']}
							</div>
							<div class="text-white-1">{chat['message']}</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	{:else}
		<div class="text-white">LOADING</div>
	{/if}
	<div class="absolute bottom-5 inset-x-5 z-10 bg-dark-4 px-4 text-white-1 rounded">
		{#if !$isLoadingChannels}
			<form on:submit|preventDefault={submitMessage}>
				<input
					class="w-full py-2 outline-none bg-transparent"
					placeholder={'Message to ' +
						$all_messages[$location['server']]['channels'][$location['channel']]['name']}
					bind:value={chatMessage}
				/>
			</form>
		{:else}
			<div class="text-white">LOADING</div>
		{/if}
	</div>
</div>

<style>
	::-webkit-scrollbar {
		width: 5px;
	}

	::-webkit-scrollbar-thumb {
		background-color: #414348;
		border-radius: 3px;
	}
</style>
