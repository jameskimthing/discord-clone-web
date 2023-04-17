<script lang="ts">
	import { location } from '$lib/location';

	export let server_name: string;
	export let onclick: Function | undefined = undefined;
</script>

<div class="w-min h-min cursor-pointer">
	<div
		class={'w-12 h-12 border-2 rounded-3xl hover:rounded-lg transition-all group relative ' +
			($location['server'] === server_name ? 'rounded-lg' : '')}
		on:pointerup={() => {
			if (onclick) onclick();
			else $location['server'] = server_name;
		}}
	>
		<div
			class="absolute left-[70px] select-none inset-y-0 my-auto h-min w-min opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all"
		>
			<div class="text-white-1 whitespace-nowrap bg-dark-1 rounded py-1 px-2">s{server_name}</div>
		</div>
	</div>
</div>
