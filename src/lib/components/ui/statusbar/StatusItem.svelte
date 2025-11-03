<script lang="ts">
	import type { Component } from '@lucide/svelte';

	export let icon: typeof Component | null | string = null;
	export let label: string = '';
	export let tooltip: string = '';
	export let onClick: (() => void) | null = null;
	export let isActive = false;
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
	class:active={isActive}
>
	{#if icon && typeof icon !== 'string'}
		<svelte:component this={icon} class="status-icon" />
	{/if}
	{#if icon && typeof icon === 'string'}
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
		justify-content: center;
		gap: 4rem;
		padding: 0.5rem;
		border-radius: 0.5rem;
		height: 100%;
		font-size: 12px;
		color: var(--status-fg, #ccc);
		cursor: pointer;
		user-select: none;
	}

	.status-item[role='status'] {
		cursor: default;
	}

	.status-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 16px;
		height: 16px;
	}
	.status-item:hover {
		background-color: var(--status-hover-bg, rgba(255, 255, 255, 0.05));
	}

	.status-item.active {
		background-color: var(--status-hover-bg, rgba(255, 255, 255, 0.15));
	}

	.status-label {
		white-space: nowrap;
	}
</style>
