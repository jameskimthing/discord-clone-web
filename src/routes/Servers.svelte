<script lang="ts">
	import { gotoServer } from '$lib/nav/goto';
	import Server from '$lib/components/Server.svelte';
	import { isLoadingServers } from '$lib/nav/loading';
	import { supabase } from '$lib/supabase';
	import { all_messages } from '$lib/messages';

	let serversHere: { name: string; id: string }[] = [];
	(async () => {
		isLoadingServers.set(true);
		let { data: servers, error } = await supabase.from('servers').select('name,id');
		if (error) throw error;

		let firstId: string;

		all_messages.update((prev) => {
			serversHere = servers!.map((obj) => {
				if (!firstId) firstId = obj.id;
				prev[obj.id] = { name: obj.name, channels: {}, loaded: false };
				return obj;
			});
			return prev;
		});
		if (!firstId!) firstId = '0';
		isLoadingServers.set(false);
		await gotoServer(firstId);
	})();
</script>

<div>
	<div class="w-20 h-screen bg-dark-1">
		{#if !$isLoadingServers}
			<div class="w-min mx-auto pt-5 pb-5 mb-5 border-b-2 border-dark-2">
				<Server name="none" id="0" onclick={() => console.log('Special!')} />
			</div>
			<div class=" flex flex-col items-center gap-4">
				{#each serversHere as s}
					<Server name={s['name']} id={s['id']} />
				{/each}
			</div>
		{:else}
			<div class="text-white">LOADING</div>
		{/if}
	</div>
</div>
