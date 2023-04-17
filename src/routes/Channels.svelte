<script lang="ts">
	import Channel from '$lib/components/Channel.svelte';
	import { location } from '$lib/location';

	const channels = {
		general: ['message1', 'message2', 'message3'],
		there: ['messaasage1', 'meage2', 'messaage3'],
		here: ['mege1', 'mege2', 'me3']
	};
</script>

<div class="w-min">
	<div class="h-full w-60 bg-dark-2">
		<div class="flex flex-col h-fit w-full">
			<div class="w-full h-12 border-b-2 border-dark-1 flex items-center ">
				<div class="pl-4 text-white-1 text-xl">
					{$location['server']}
				</div>
			</div>
			<div class="py-6 px-3 text-white-2 flex flex-col gap-1">
				{#each Object.keys(channels) as channel_name}
					<Channel {channel_name} />
				{/each}
			</div>
		</div>
	</div>
</div>
