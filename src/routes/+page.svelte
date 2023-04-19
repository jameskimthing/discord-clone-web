<script lang="ts">
	import { fade } from 'svelte/transition';
	import Channels from './Channels.svelte';
	import Chat from './Chat.svelte';
	import Servers from './Servers.svelte';
	import Topbar from './Topbar.svelte';
	import Users from './Users.svelte';
	import { username } from '$lib/users';

	let gaveUsername: boolean = false;
	let usernameBind: string = '';
	function giveUsername() {
		username.set(usernameBind);
		gaveUsername = true;
	}
</script>

{#if !gaveUsername}
	<div
		transition:fade
		class="fixed left-0 right-0 top-0 bottom-0 backdrop-blur-sm z-20 grid place-content-center"
	>
		<div class="bg-dark-1 rounded-xl shadow-2xl w-96 h-32 flex flex-col items-center">
			<div class="h-12 w-full rounded-t-xl bg-blue-1 text-center text-white-1 text-lg">
				<div class="py-3 font-semibold">What name will you use?</div>
				<div class="mx-4 my-3">
					<form on:submit|preventDefault={giveUsername} class="flex flex-row">
						<input
							class="w-full py-2 outline-none bg-transparent"
							placeholder={'My name is...'}
							bind:value={usernameBind}
						/>
						<button type="submit" class="bg-white-3 rounded px-2 py-1">Submit</button>
					</form>
				</div>
			</div>
		</div>
	</div>
{/if}

<div class="flex flex-row w-screen h-screen">
	<Servers />
	<Channels />
	<div class="flex flex-col w-full">
		<Topbar />
		<div class="flex flex-row h-full">
			<Chat />
			<Users />
		</div>
	</div>
</div>
