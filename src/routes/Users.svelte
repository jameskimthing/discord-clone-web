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
	<div class="h-full w-60 bg-dark-2 p-4 flex flex-col gap-3">
		{#if !$isLoadingChannels}
			<div class="text-white-2 pb-3">
				{`${channel['name']}: ${channel['users'].size} users`}
			</div>
			{#if !$isLoadingMessages}
				{#each Array.from($all_messages[$location['server']]['channels'][$location['channel']]['users']) as username}
					<div class="flex flex-row items-center">
						<UserProfile {username} />
						<div class="text-white-2 pl-3">{username}</div>
					</div>
				{/each}
			{:else}
				<Loading />
			{/if}
		{:else}
			<Loading />
		{/if}
	</div>
</div>
