<script lang="ts">
	import { usernameColor } from '$lib/users';

	export let username: string;
</script>

{#if username}
	<div
		class="w-10 h-10 text-white-1 font-bold text-xl rounded-full flex items-center justify-center select-none"
		style={`background-color: ${usernameColor(username)};`}
	>
		{username.charAt(0)}
	</div>
{/if}
