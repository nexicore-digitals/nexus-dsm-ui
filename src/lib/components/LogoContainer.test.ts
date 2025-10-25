import { render, screen } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import LogoContainer from './LogoContainer.svelte';

describe('LogoContainer', () => {
	it('should render the logo container with the correct text', () => {
		render(LogoContainer);

		expect(screen.getByTestId('logo-container')).toBeInTheDocument();
		expect(screen.getByText('Nexus DSM Studio')).toBeInTheDocument();
	});
});
