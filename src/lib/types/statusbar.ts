import type { Component } from '@lucide/svelte';

export type StatusItemMeta = {
	id: string;
	role: 'context' | 'action';
	label?: string;
	icon?: Component;
	tooltip?: string;
	onClick?: () => void;
	priority: number;
	source: 'core' | 'extension' | 'user';
	orderHint?: number;
	installedAt: number;
};

export type StatusRegistry = {
	actions: StatusItemMeta[];
	contexts: StatusItemMeta[];
};

export const STATUS_ITEM_META_PRIORITY = {
	CORE_HIGH: 1000,
	CORE_LOW: 800,
	EXTENSION_DEFAULT: 500,
	USER_CUSTOM: 200
};
