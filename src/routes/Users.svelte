<script lang="ts">
	import Loading from '$lib/components/Loading.svelte';
	import UserProfile from '$lib/components/UserProfile.svelte';
	import { all_messages } from '$lib/messages';
	import { isLoadingChannels, isLoadingMessages } from '$lib/nav/loading';
	import { location } from '$lib/nav/location';

	// const users = ['user1', 'another user', 'definitely not bot'];
	let channel: {
		name: string;
		loaded: boolean;
		users: Set<string>;
		messages: {
			name: string;
			message: string;
		}[];
	};
	$: if (!$isLoadingChannels || !$isLoadingMessages)
		channel = $all_messages[$location['server']]['channels'][$location['channel']];
</script>

<div class="">
	<div class="h-full w-60 bg-dark-2 p-4 relative">
		{#if !$isLoadingChannels}
			<div class="text-white-2 pb-2">
				{`${channel['name']}: ${channel['users'].size} users`}
			</div>
			<div class="w-full border-b-2 border-dark-4" />
			{#if !$isLoadingMessages}
				<div class="absolute top-16 bottom-4 inset-x-4 overflow-auto">
					<div class="flex flex-col gap-4">
						{#each Array.from($all_messages[$location['server']]['channels'][$location['channel']]['users']) as username}
							<div class="flex flex-row items-center">
								<UserProfile {username} />
								<div class="text-white-2 pl-3">{username}</div>
							</div>
						{/each}
					</div>
				</div>
			{:else}
				<Loading />
			{/if}
		{:else}
			<Loading />
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
