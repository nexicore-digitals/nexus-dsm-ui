import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export interface RecentProject {
	name: string;
	path: string;
}

const storageKey = 'recentProjects';

/**
 * Creates a writable Svelte store that persists its value in localStorage.
 */
function createPersistentStore() {
	// On the server, start with an empty array.
	let initialValue: RecentProject[] = [];

	if (browser) {
		try {
			const storedValue = localStorage.getItem(storageKey);
			if (storedValue) {
				initialValue = JSON.parse(storedValue);
			}
		} catch (e) {
			console.error('Failed to parse recent projects from localStorage', e);
			initialValue = [];
		}
	}

	const store = writable<RecentProject[]>(initialValue);

	if (browser) {
		store.subscribe((value) => {
			localStorage.setItem(storageKey, JSON.stringify(value));
		});
	}

	return store;
}

export const recentProjects = createPersistentStore();
