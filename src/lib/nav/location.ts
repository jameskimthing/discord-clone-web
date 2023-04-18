import { writable, type Writable } from 'svelte/store';

const location: Writable<{ server: string; channel: string }> = writable({
	server: '1',
	channel: '1'
});

export { location };
