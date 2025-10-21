<script lang="ts">
	import { activeMenuId } from '$lib/stores/menu';
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	// Simplified default positioning; these would normally be controlled by a Radix or Floating UI implementation
	// export let align: 'start' | 'center' | 'end' = 'start';
	// export let sideOffset: number = 10;
	let {
		id,
		className = '',
		children
	}: { id?: string; className: string; children: Snippet } = $props();
	let isActive: boolean = $derived($activeMenuId === id);
</script>

<div
	class={cn(
		'bg-popover text-popover-foreground relative top-[var(--side-offset)] z-50 min-w-[12rem] overflow-hidden rounded-md bg-[var(--color-secondary)] p-1 opacity-0 shadow-md',
		isActive ? 'animate-in fade-in-0' : '',
		className
	)}
>
	{@render children?.()}
</div>

<!-- style="--side-offset: {sideOffset}px; --align: {align};" -->
<!-- data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
		'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 -->
