<script lang="ts">
	import { gotoChannel } from '$lib/nav/goto';
	import { location } from '$lib/nav/location';

	export let name: string;
	export let id: string;
</script>

<div
	class={'cursor-pointer hover:bg-dark-4 hover:text-white-1 rounded w-full py-1 pl-3 ' +
		($location['channel'] == id ? 'bg-dark-4 text-white-1' : '')}
	on:pointerup={() => gotoChannel(id)}
>
	{'# ' + name}
</div>
