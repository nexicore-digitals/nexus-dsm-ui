import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import type { Theme, ThemeName } from '../types/theme';

/**
 * A record of all registered themes. Starts with the base themes.
 */
const themes: Record<ThemeName, Theme> = {
	dark: {
		name: 'dark',
		displayName: 'Dark (VS Code)',
		colors: {
			background: '#1e1e1e',
			foreground: '#d4d4d4',
			editor: '#1e1e1e',
			sidebar: '#252526',
			activityBar: '#333333',
			statusBar: '#007acc',
			border: '#3e3e42',
			primary: '#007acc',
			secondary: '#2d2d30',
			muted: '#969696',
			accent: '#0098ff',
			tabActive: '#1e1e1e',
			tabInactive: '#2d2d30',
			input: '#3c3c3c'
		}
	},
	light: {
		name: 'light',
		displayName: 'Light (VS Code)',
		colors: {
			background: '#ffffff',
			foreground: '#3b3b3b',
			editor: '#ffffff',
			sidebar: '#f3f3f3',
			activityBar: '#2c2c2c',
			statusBar: '#007acc',
			border: '#e5e5e5',
			primary: '#005fb8',
			secondary: '#f8f8f8',
			muted: '#6d6d6d',
			accent: '#0078d4',
			tabActive: '#ffffff',
			tabInactive: '#ececec',
			input: '#ffffff'
		}
	},
	'high-contrast': {
		name: 'high-contrast',
		displayName: 'High Contrast',
		colors: {
			background: '#000000',
			foreground: '#ffffff',
			editor: '#000000',
			sidebar: '#000000',
			activityBar: '#000000',
			statusBar: '#000000',
			border: '#6fc3df',
			primary: '#6fc3df',
			secondary: '#000000',
			muted: '#ffffff',
			accent: '#f38518',
			tabActive: '#000000',
			tabInactive: '#000000',
			input: '#000000'
		}
	},
	monokai: {
		name: 'monokai',
		displayName: 'Monokai',
		colors: {
			background: '#272822',
			foreground: '#f8f8f2',
			editor: '#272822',
			sidebar: '#1e1f1c',
			activityBar: '#1e1f1c',
			statusBar: '#75715e',
			border: '#3e3d32',
			primary: '#66d9ef',
			secondary: '#3e3d32',
			muted: '#75715e',
			accent: '#a6e22e',
			tabActive: '#272822',
			tabInactive: '#34352f',
			input: '#3e3d32'
		}
	},
	solarized: {
		name: 'solarized',
		displayName: 'Solarized Dark',
		colors: {
			background: '#002b36',
			foreground: '#839496',
			editor: '#002b36',
			sidebar: '#073642',
			activityBar: '#073642',
			statusBar: '#268bd2',
			border: '#0d4b5f',
			primary: '#268bd2',
			secondary: '#073642',
			muted: '#586e75',
			accent: '#2aa198',
			tabActive: '#002b36',
			tabInactive: '#073642',
			input: '#073642'
		}
	}
};

/**
 * A writable store that holds an array of all available themes.
 * This allows UI components to reactively list themes.
 */
export const availableThemes = writable<Theme[]>(Object.values(themes));

/**
 * Utility function to dynamically add a new theme to the system.
 * @param theme The theme object to add.
 */
export function addTheme(theme: Theme) {
	themes[theme.name] = theme;
	availableThemes.set(Object.values(themes));
}

/**
 * Sets the current application theme.
 * @param themeName The name of the theme to set.
 */
export function setTheme(themeName: ThemeName) {
	currentThemeName.set(themeName);
}

/**
 * Determines the initial theme based on user preference, OS setting, or a default.
 * 1. Check localStorage for a saved theme.
 * 2. If not found, check the OS preference for dark mode.
 * 3. Default to 'dark' if all else fails.
 */
function getInitialThemeName(): ThemeName {
	if (!browser) return 'dark';

	const savedTheme = localStorage.getItem('theme') as ThemeName;
	if (savedTheme && themes[savedTheme]) {
		return savedTheme;
	}

	const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
	return prefersDark ? 'dark' : 'light';
}

const currentThemeName = writable<ThemeName>(getInitialThemeName());

currentThemeName.subscribe((themeName) => {
	if (browser) {
		localStorage.setItem('theme', themeName);
		const theme = themes[themeName];
		const root = document.documentElement;
		if (theme) {
			for (const [key, value] of Object.entries(theme.colors)) {
				root.style.setProperty(`--theme-${key}`, value);
			}
		}
	}
});

export default currentThemeName;
