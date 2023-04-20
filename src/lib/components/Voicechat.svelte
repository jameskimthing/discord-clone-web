<script lang="ts">
	import { location } from '$lib/nav/location';
	import { initializeVoiceChat, joinVoicechat, voicechat_members } from '$lib/voicechat';
	import UserProfile from './UserProfile.svelte';

	initializeVoiceChat();
</script>

<div
	class={'cursor-pointer hover:bg-dark-4 hover:text-white-1 rounded w-full py-1 pl-3 ' +
		($location['channel'] == 'voice' ? 'bg-dark-4 text-white-1' : '')}
	on:pointerup={() => joinVoicechat($location['server'])}
>
	- voice chat
	<div class="flex flex-row flex-wrap gap-2 pb-1">
		{#each Array.from($voicechat_members) as username}
			<UserProfile {username} />
		{/each}
	</div>
</div>
