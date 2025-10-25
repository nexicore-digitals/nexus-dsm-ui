import { render, screen } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import EditorHeader from './EditorHeader.svelte';

describe('EditorHeader', () => {
	it('should render the editor header', () => {
		render(EditorHeader);

		expect(screen.getByTestId('editor-header')).toBeInTheDocument();
	});
});
