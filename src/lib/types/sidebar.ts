import type { Component } from '@lucide/svelte';

export type SidebarItemMeta = {
	id: string;
	icon: typeof Component | null | string;
	label?: string;
	tooltip?: string;
	shortcut?: string; // e.g. 'Ctrl+Shift+E'
	panel?: Component | string; // Svelte component
	order?: number;
	source?: 'core' | 'extension' | 'user';
};

export type SidebarRegistry = SidebarItemMeta[];
