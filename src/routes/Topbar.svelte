<script lang="ts">
	import { all_messages } from '$lib/messages';
	import { isLoadingChannels } from '$lib/nav/loading';
	import { location } from '$lib/nav/location';
</script>

<div class="h-min">
	<div class="flex flex-col w-full">
		<div class="w-full h-12 flex flex-row bg-dark-3 border-b-2 border-dark-1 items-center">
			{#if !$isLoadingChannels}
				<div class="text-white-1 text-xl ml-4">
					{'# ' + $all_messages[$location['server']]['channels'][$location['channel']]['name']}
					<!-- {'# ' + $location['channel']} -->
				</div>
			{:else}
				<div class="text-white">IS LOADING</div>
			{/if}
		</div>
	</div>
</div>
