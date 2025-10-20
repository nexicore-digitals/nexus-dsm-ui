<script lang="ts">
	import currentThemeName, { availableThemes, setTheme } from '$lib/stores/theme';
	import type { ThemeName } from '$lib/types/theme';

	function handleThemeChange(event: Event) {
		const target = event.target as HTMLSelectElement;
		setTheme(target.value as ThemeName);
	}
</script>

<div class="theme-switcher p-4">
	<label for="theme-select">Theme:</label>
	<select id="theme-select" on:change={handleThemeChange} value={$currentThemeName}>
		{#each $availableThemes as theme (theme.name)}
			<option value={theme.name}>{theme.displayName}</option>
		{/each}
	</select>
</div>
