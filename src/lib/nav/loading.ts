import { writable, type Writable } from 'svelte/store';

const isLoadingServers: Writable<boolean> = writable(true);
const isLoadingChannels: Writable<boolean> = writable(true);
const isLoadingMessages: Writable<boolean> = writable(true);

export { isLoadingChannels, isLoadingMessages, isLoadingServers };
