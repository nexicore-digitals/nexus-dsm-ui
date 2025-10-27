<script lang="ts">
	import type { Component } from '@lucide/svelte';

	export let icon: Component | null = null;
	export let label: string = '';
	export let tooltip: string = '';
	export let onClick: (() => void) | null = null;
</script>

<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
<div
	class="status-item"
	role={onClick ? 'button' : 'status'}
	tabindex={onClick ? 0 : undefined}
	aria-label={tooltip}
	title={tooltip}
	onclick={() => onClick?.()}
	onkeydown={(e) => e.key === 'Enter' && onClick?.()}
>
	{#if icon}
		<span class="status-icon">{icon}</span>
	{/if}
	{#if label}
		<span class="status-label">{label}</span>
	{/if}
</div>

<style>
	.status-item {
		display: inline-flex;
		align-items: center;
		gap: 4px;
		padding: 0 6px;
		height: 100%;
		font-size: 12px;
		color: var(--status-fg, #ccc);
		cursor: pointer;
		user-select: none;
	}

	.status-item[role='status'] {
		cursor: default;
	}

	.status-item:hover {
		background-color: var(--status-hover-bg, rgba(255, 255, 255, 0.05));
	}

	.status-icon {
		display: inline-flex;
		align-items: center;
	}

	.status-label {
		white-space: nowrap;
	}
</style>
