import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
	plugins: [svelte({ hot: !process.env.VITEST })],
	resolve: {
		alias: {
			$lib: '/src/lib',
			$components: '/src/lib/components',
			$stores: '/src/lib/stores',
			$utils: '/src/lib/utils',
			$types: '/src/lib/types'
		},
		// Add "browser" to the conditions to make sure Svelte browser-specific exports are used.
		conditions: ['browser']
	},
	test: {
		// Add the 'jsdom' environment to simulate a browser for component testing
		environment: 'jsdom',
		globals: true,
		pool: 'threads',
		passWithNoTests: true,
		setupFiles: 'src/setupTests.js',
		coverage: {
			reporter: ['html', 'text'],
			reportsDirectory: './coverage'
		},
		include: [
			'**/*.test.ts',
			'**/*.test.js',
			'**/*.spec.ts',
			'**/*.spec.js',
			'**/*.test.jsx',
			'**/*.test.tsx',
			'**/*.spec.jsx',
			'**/*.spec.tsx'
		],
		exclude: [
			'**/node_modules/**',
			'**/dist/**',
			'**/cypress/**',
			'**/.{idea,git,cache,output,temp}/**'
		]
	}
});
