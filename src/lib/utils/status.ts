import { CORE_STATUS_ITEMS } from '$lib/constants/core-status-items';
import { actions, contexts } from '$lib/stores/status';
import { STATUS_ITEM_META_PRIORITY, type StatusItemMeta } from '$lib/types/statusbar';
import { get } from 'svelte/store';

export function registerStatusItem(item: StatusItemMeta) {
	const zone = item.role;
	const now = Date.now();

	const priority = item.priority ?? STATUS_ITEM_META_PRIORITY.EXTENSION_DEFAULT;
	const installedAt = item.installedAt ?? now;

	const enrichedItem: StatusItemMeta = {
		...item,
		priority,
		installedAt
	};

	const store = zone === 'context' ? contexts : actions;
	const current = get(store);

	// Prevent duplicate IDs
	if (current.some((i) => i.id === item.id)) {
		console.warn(`Status item "${item.id}" already exists in ${zone} zone.`);
		return;
	}

	const updated = [...current, enrichedItem].sort(sortStatusItems);
	store.set(updated);
}

export function loadCoreStatusItems() {
	const contextItems: StatusItemMeta[] = [];
	const actionItems: StatusItemMeta[] = [];

	for (const item of CORE_STATUS_ITEMS) {
		if (item.role === 'context') {
			contextItems.push(item);
		} else if (item.role === 'action') {
			actionItems.push(item);
		}
	}

	// Sort and deduplicate by ID
	const dedupe = (items: StatusItemMeta[]) =>
		Array.from(new Map(items.map((i) => [i.id, i])).values()).sort(sortStatusItems);

	contexts.set(dedupe(contextItems));
	actions.set(dedupe(actionItems));
}

export function sortStatusItems(a: StatusItemMeta, b: StatusItemMeta) {
	if (b.priority !== a.priority) return b.priority - a.priority;
	if ((a.orderHint ?? 0) !== (b.orderHint ?? 0)) return (a.orderHint ?? 0) - (b.orderHint ?? 0);
	return a.installedAt - b.installedAt;
}
