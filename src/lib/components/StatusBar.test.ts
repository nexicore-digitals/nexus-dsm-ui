import { render, screen } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import StatusBar from './StatusBar.svelte';

describe('StatusBar', () => {
	it('should render the status bar with default content', () => {
		render(StatusBar);

		expect(screen.getByTestId('statusbar')).toBeInTheDocument();
		expect(screen.getByText('main')).toBeInTheDocument();
	});
});
