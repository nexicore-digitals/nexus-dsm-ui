<script lang="ts">
	import { cn } from '$lib/utils';

	// Props match React component props
	export let className: string = '';

	// Radix state attributes are passed through via $$restProps if you use a Svelte Radix port,
	// but here we focus on the styling.
</script>

<button
	class={cn(
		'flex cursor-default items-center rounded-sm border border-[var(--color-editor)] px-3 py-1.5 text-sm font-medium transition-colors outline-none select-none',
		'data-[state=open]:bg-accent data-[state=open]:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
		className
	)}
	{...$$restProps}
>
	<slot />
</button>
