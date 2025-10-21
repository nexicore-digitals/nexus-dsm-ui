import { writable, derived } from 'svelte/store';
import { NDS_MENUBAR_DATA } from '$lib/constants/menubar';

// Menu store that holds the full menu data
export const Menu = writable(NDS_MENUBAR_DATA);

// A derived store for active menu item
export const activeMenuId = writable<string | null>(null);

// Derived store that returns the active menu item or state
export const activeMenu = derived([Menu, activeMenuId], ([$Menu, $activeMenuId]) => {
	return $Menu.find((menuItem) => menuItem.id === $activeMenuId) ?? null;
});

// Optimized setter for updating active menu
export const setActiveMenu = (id: string) => {
	return activeMenuId.set(id);
};
