<script lang="ts">
	import { cn } from '$lib/utils';

	// Props match React component props
	export let className: string = '';
</script>

<div
	class={cn(
		'bg-background flex flex-row items-center justify-center gap-x-5 space-x-1 rounded-md outline-0',
		className
	)}
	{...$$restProps}
	aria-orientation="horizontal"
>
	<slot />
</div>
