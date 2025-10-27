import { render, fireEvent } from '@testing-library/svelte';
import { describe, expect, it, vi } from 'vitest';
import StatusItem from './ui/statusbar/StatusItem.svelte';

describe('StatusBar Item', () => {
	it('renders label and tooltip', () => {
		const { getByText } = render(StatusItem, {
			props: { label: 'Schema Valid', tooltip: 'Validation passed' }
		});

		expect(getByText('Schema Valid')).toBeTruthy();
	});

	it('handles click if onClick is provided', async () => {
		const mock = vi.fn();
		const { getByRole } = render(StatusItem, {
			props: { label: 'Click Me', onClick: mock }
		});

		await fireEvent.click(getByRole('button'));
		expect(mock).toHaveBeenCalled();
	});
});
