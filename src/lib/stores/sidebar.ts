import type { SidebarItemMeta } from '$lib/types/sidebar';
import { writable, derived } from 'svelte/store';

export const sidebarItems = writable<SidebarItemMeta[]>([]);
export const activeSidebarId = writable<string | null>(null);

export const sortedSidebarItems = derived(sidebarItems, ($items) => {
	return [...$items].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
});

export const topSidebarItems = derived(sortedSidebarItems, ($items) => $items.slice(0, 12));
export const overflowSidebarItems = derived(sortedSidebarItems, ($items) => $items.slice(12));
export const bottomSidebarItem = writable<SidebarItemMeta[] | null>(null); // e.g. account/settings

// A derived store that is true if any sidebar item is active.
export const isSidebarOpen = derived(activeSidebarId, ($activeSidebarId) => !!$activeSidebarId);
