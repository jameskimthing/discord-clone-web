import { writable, type Writable } from 'svelte/store';

const location: Writable<{ server: string; channel: string }> = writable({
	server: 'best-server',
	channel: 'general'
});

export { location };
