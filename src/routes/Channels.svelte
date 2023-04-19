<script lang="ts">
	import Channel from '$lib/components/Channel.svelte';
	import Loading from '$lib/components/Loading.svelte';
	import { all_messages } from '$lib/messages';
	import { isLoadingChannels } from '$lib/nav/loading';
	import { location } from '$lib/nav/location';

	let channels: { [id: string]: { name: string } } = {};
	$: channels = $all_messages[$location['server']]?.['channels'] ?? {};
</script>

<div class="w-min">
	<div class="h-full w-60 bg-dark-2">
		{#if !$isLoadingChannels}
			<div class="flex flex-col h-fit w-full">
				<div class="w-full h-12 border-b-2 border-dark-1 flex items-center ">
					<div class="pl-4 text-white-1 text-xl">
						{$all_messages[$location['server']]['name']}
					</div>
				</div>
				<div class="py-6 px-3 text-white-2 flex flex-col gap-1">
					{#each Object.entries(channels) as [id, data]}
						<Channel {id} name={data.name} />
					{/each}
				</div>
			</div>
		{:else}
			<Loading />
		{/if}
	</div>
</div>
