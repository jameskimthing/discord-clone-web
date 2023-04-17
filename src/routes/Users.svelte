<script lang="ts">
	import UserProfile from '$lib/components/UserProfile.svelte';

	const users = ['user1', 'another user', 'definitely not bot'];
</script>

<div class="">
	<div class="h-full w-60 bg-dark-2 p-4 flex flex-col gap-3">
		<div class="text-white-2 pb-3">{'Usercount - ' + users.length}</div>
		{#each users as username}
			<div class="flex flex-row items-center">
				<UserProfile {username} />
				<div class="text-white-2 pl-3">{username}</div>
			</div>
		{/each}
	</div>
</div>
