<script lang="ts">
	import { location } from '$lib/location';

	export let channel_name: string;
</script>

<div
	class={'cursor-pointer hover:bg-dark-4 hover:text-white-1 rounded w-full py-1 pl-3 ' +
		($location['channel'] === channel_name ? 'bg-dark-4 text-white-1' : '')}
	on:pointerup={() => ($location['channel'] = channel_name)}
>
	{'# ' + channel_name}
</div>
