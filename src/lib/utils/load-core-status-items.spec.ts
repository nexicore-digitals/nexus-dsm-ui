import { loadCoreStatusItems } from './status';
import { contexts, actions } from '$lib/stores/status';
import { get } from 'svelte/store';
import { beforeEach, describe, expect, it } from 'vitest';

describe('loadCoreStatusItems', () => {
	beforeEach(() => {
		contexts.set([]);
		actions.set([]);
	});

	it('loads and sorts core items into correct zones', () => {
		loadCoreStatusItems();

		const ctx = get(contexts);
		const act = get(actions);

		expect(ctx.length).toBeGreaterThan(0);
		expect(act.length).toBeGreaterThan(0);

		expect(ctx.every((i) => i.role === 'context')).toBe(true);
		expect(act.every((i) => i.role === 'action')).toBe(true);
	});
});
