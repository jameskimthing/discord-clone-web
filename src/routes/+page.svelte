<script>
	import Channels from './Channels.svelte';
	import Chat from './Chat.svelte';
	import Servers from './Servers.svelte';
	import Topbar from './Topbar.svelte';
	import Users from './Users.svelte';
</script>

<div class="flex flex-row w-screen h-screen">
	<Servers />
	<Channels />
	<div class="flex flex-col w-full">
		<Topbar />
		<div class="flex flex-row h-full">
			<Chat />
			<Users />
		</div>
	</div>
</div>
