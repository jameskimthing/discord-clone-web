<script lang="ts">
	import { gotoServer } from '$lib/nav/goto';
	import { location } from '$lib/nav/location';
	import { usernameColor } from '$lib/users';

	export let name: string;
	export let id: string;
	export let onclick: Function | undefined = undefined;
</script>

<div class="w-min h-min cursor-pointer">
	<div
		class={'w-12 h-12 border-2 rounded-3xl hover:rounded-lg transition-all group relative ' +
			($location['server'] === id ? 'rounded-lg' : '')}
		on:pointerup={() => {
			if (onclick) onclick();
			else gotoServer(id);
		}}
		style={`background-color: ${usernameColor(name)};`}
	>
		<div
			class="absolute left-[70px] select-none inset-y-0 my-auto h-min w-min opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all cursor-default"
			on:pointerup={(e) => e.stopPropagation()}
		>
			<div class="text-white-1 whitespace-nowrap bg-dark-1 rounded py-1 px-2">{name}</div>
		</div>
	</div>
</div>
