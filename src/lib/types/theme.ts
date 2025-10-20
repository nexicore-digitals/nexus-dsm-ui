// Base themes that are included by default.
export type BaseThemeName = 'dark' | 'light' | 'high-contrast' | 'monokai' | 'solarized';

// Allow for extensibility while providing autocomplete for base themes.
export type ThemeName = BaseThemeName | (string & {});

export interface Theme {
	name: ThemeName;
	displayName: string;
	colors: {
		background: string;
		foreground: string;
		editor: string;
		sidebar: string;
		activityBar: string;
		statusBar: string;
		border: string;
		primary: string;
		secondary: string;
		muted: string;
		accent: string;
		tabActive: string;
		tabInactive: string;
		input: string;
	};
}
