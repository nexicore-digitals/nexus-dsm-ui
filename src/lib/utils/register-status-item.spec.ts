import { registerStatusItem } from './status';
import { contexts, actions } from '$lib/stores/status';
import { get } from 'svelte/store';
import { beforeEach, describe } from 'vitest';
import { expect, it } from 'vitest';
import type { StatusItemMeta } from '$lib/types/statusbar';

describe('registerStatusItem', () => {
	beforeEach(() => {
		contexts.set([]);
		actions.set([]);
	});

	it('registers a context item and sorts by priority', () => {
		registerStatusItem({
			id: 'a',
			role: 'context',
			label: 'A',
			priority: 500,
			installedAt: 1000,
			source: 'user'
		});

		registerStatusItem({
			id: 'b',
			role: 'context',
			label: 'B',
			priority: 1000,
			installedAt: 2000,
			source: 'user'
		} as StatusItemMeta);

		const items = get(contexts);
		expect(items.map((i) => i.id)).toEqual(['b', 'a']);
	});

	it('deduplicates by ID', () => {
		registerStatusItem({
			id: 'x',
			role: 'action',
			label: 'X',
			priority: 500,
			installedAt: 1000,
			source: 'user'
		});
		registerStatusItem({
			id: 'x',
			role: 'action',
			label: 'X2',
			priority: 600,
			installedAt: 2000,
			source: 'user'
		});

		const items = get(actions);
		expect(items.length).toBe(1);
		expect(items[0].priority).toBe(500); // original preserved
	});
});
