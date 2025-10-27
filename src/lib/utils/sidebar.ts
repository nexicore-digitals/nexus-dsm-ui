import { bottomSidebarItem, sidebarItems } from '$lib/stores/sidebar';
import type { SidebarItemMeta } from '$lib/types/sidebar';
import { Blocks, CircleUserRound, Files, Search, Settings } from '@lucide/svelte';

export function registerSidebarItem(item: SidebarItemMeta) {
	sidebarItems.update((items) => {
		if (items.some((i) => i.id === item.id)) return items;
		return [...items, item];
	});
}

export function loadCoreSidebarItems() {
	registerSidebarItem({
		id: 'explorer',
		icon: Files,
		tooltip: 'Dataset Explorer',
		shortcut: 'Ctrl+Shift+E',
		panel: 'ExplorerPanel',
		order: 1,
		source: 'core'
	});

	registerSidebarItem({
		id: 'search',
		icon: Search,
		tooltip: 'Search Dataset',
		shortcut: 'Ctrl+Shift+F',
		panel: 'SearchPanel',
		order: 2,
		source: 'core'
	});

	registerSidebarItem({
		id: 'extensions',
		icon: Blocks,
		tooltip: 'Extensions',
		shortcut: 'Ctrl+Shift+X',
		panel: 'ExtensionsPanel',
		order: 3,
		source: 'core'
	});

	bottomSidebarItem.set([
		{
			id: 'account',
			icon: CircleUserRound,
			tooltip: 'Account & Profile',
			shortcut: 'Ctrl+Shift+A',
			panel: 'AccountPanel',
			source: 'core'
		},
		{
			id: 'settings',
			icon: Settings,
			tooltip: 'Settings',
			shortcut: 'Ctrl+,',
			panel: 'SettingsPanel',
			order: 4,
			source: 'core'
		}
	]);
}
