<script lang="ts">
	import UserProfile from '$lib/components/UserProfile.svelte';
	import { location } from '$lib/location';
	import { usernameColor } from '$lib/users';

	let chats = [
		{ name: 'user1', message: 'Here i AM' },
		{ name: 'another user', message: 'no i am not' },
		{ name: 'definitely not a bot', message: 'i am human' },
		{ name: 'another user', message: 'u sure?' },
		{ name: 'definitely not a bot', message: 'yes' }
	];

	let chatMessage: string = '';
	function submitMessage() {
		chats = [...chats, { name: 'user1', message: chatMessage }];
		chatMessage = '';
	}
</script>

<div class="w-full h-full bg-dark-3 relative">
	<div class="absolute bottom-20 w-full top-0 overflow-auto px-5 flex flex-col-reverse">
		<div class="mt-auto">
			{#each chats as chat (chat)}
				<div class="flex flex-row items-center pb-4">
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
	<div class="absolute bottom-5 inset-x-5 z-10 bg-dark-4 px-4 text-white-1 rounded">
		<form on:submit|preventDefault={submitMessage}>
			<input
				class="w-full py-2 outline-none bg-transparent"
				placeholder={'Message to ' + $location['channel']}
				bind:value={chatMessage}
			/>
		</form>
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
