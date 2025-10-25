import { fireEvent, render, screen } from '@testing-library/svelte';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import Menubar from './Menubar.svelte';
import { setActiveMenu } from '$lib/stores/menu';

// Mock the stores
const mockModule = vi.hoisted(() => {
	// Import `writable` inside `vi.hoisted` so it's available when the mock is created.
	const { writable } = require('svelte/store') as typeof import('svelte/store');
	const mockMenuData = [
		{
			id: 'file',
			label: 'File',
			items: [
				{ type: 'action', label: 'New File', accelerator: 'N' },
				{ type: 'action', label: 'Open File', accelerator: 'O' }
			]
		},
		{
			id: 'edit',
			label: 'Edit',
			items: [{ type: 'action', label: 'Undo', accelerator: 'Z' }]
		}
	];

	const activeMenuId = writable<string | null>(null);

	return {
		Menu: writable(mockMenuData),
		setActiveMenu: vi.fn((id: string | null) => {
			activeMenuId.set(id);
		}),
		activeMenuId: activeMenuId
	};
});

vi.mock('$lib/stores/menu', () => {
	return mockModule;
});

describe('Menubar', () => {
	beforeEach(() => {
		// Reset mocks before each test
		vi.clearAllMocks();
	});
	afterEach(() => {
		vi.clearAllMocks();
	});

	it('should render menu items from the store', () => {
		render(Menubar);

		// Check if the top-level menu items are rendered
		expect(screen.getByText('File')).toBeInTheDocument();
		expect(screen.getByText('Edit')).toBeInTheDocument();
	});

	it('should call setActiveMenu with the correct id when a trigger is clicked', async () => {
		render(Menubar);

		const fileTrigger = screen.getByText('File');
		await fileTrigger.click();

		expect(setActiveMenu).toHaveBeenCalledTimes(1);
		expect(setActiveMenu).toHaveBeenCalledWith('file');
	});

	it('should show the correct menu content when a trigger is clicked', async () => {
		render(Menubar);

		const fileTriggerButton = screen.getByText('File');
		await fireEvent.click(fileTriggerButton);

		expect(screen.getByText('New File')).toBeVisible();
		expect(screen.getByText('Open File')).toBeVisible();
	});
});
