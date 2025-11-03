import { writable } from 'svelte/store';

interface DialogOptions {
	title: string;
	message: string;
	confirmText?: string;
	cancelText?: string;
}

interface DialogStore {
	isOpen: boolean;
	options: DialogOptions | null;
	resolve: ((value: boolean) => void) | null;
}

const initialStore: DialogStore = {
	isOpen: false,
	options: null,
	resolve: null
};

const { subscribe, update } = writable<DialogStore>(initialStore);

function confirm(options: DialogOptions): Promise<boolean> {
	return new Promise((resolve) => {
		update((store) => ({
			...store,
			isOpen: true,
			options,
			resolve
		}));
	});
}

function close(result: boolean) {
	update((store) => {
		if (store.resolve) {
			store.resolve(result);
		}
		return { ...initialStore }; // Reset store
	});
}

export const dialog = {
	subscribe,
	confirm,
	close
};
