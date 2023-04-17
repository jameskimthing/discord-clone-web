<script lang="ts">
	import { location } from '$lib/location';
</script>

<div class="h-min">
	<div class="flex flex-col w-full">
		<div class="w-full h-12 flex flex-row bg-dark-3 border-b-2 border-dark-1 items-center">
			<div class="text-white-1 text-xl ml-4">
				{'# ' + $location['channel']}
			</div>
		</div>
	</div>
</div>
