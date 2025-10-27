import type { StatusItemMeta } from '$lib/types/statusbar';
import { sortStatusItems } from '$lib/utils/status';
import { derived, writable } from 'svelte/store';

// Writable stores for each zone
export const contexts = writable<StatusItemMeta[]>([]);
export const actions = writable<StatusItemMeta[]>([]);

// Derived store for unified registry
export const statusRegistry = derived([contexts, actions], ([$contexts, $actions]) => ({
	context: [...$contexts].sort(sortStatusItems),
	action: [...$actions].sort(sortStatusItems)
}));
