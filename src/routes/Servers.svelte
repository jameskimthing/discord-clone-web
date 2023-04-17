<script>
	import Server from '../lib/components/Server.svelte';
	const servers = {
		general: '',
		'best-server': '',
		ge: '',
		NEW: '',
		gad2ra: ''
	};
</script>

<div>
	<div class="w-20 h-screen bg-dark-1">
		<div class="w-min mx-auto pt-5 pb-5 mb-5 border-b-2 border-dark-2">
			<Server server_name="none" onclick={() => console.log('Special!')} />
		</div>
		<div class=" flex flex-col items-center gap-4">
			{#each Object.keys(servers) as server_name}
				<Server {server_name} />
			{/each}
		</div>
	</div>
</div>
