<script lang="ts">
	import { cn } from '$lib/utils';

	// Props match React component props
	export let className: string = '';
	export let inset: boolean = false; // For indenting
</script>

<div
	class={cn(
		'relative flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm transition-colors outline-none select-none',
		'focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
		inset && 'pl-8',
		className
	)}
	{...$$restProps}
>
	<slot />
</div>
