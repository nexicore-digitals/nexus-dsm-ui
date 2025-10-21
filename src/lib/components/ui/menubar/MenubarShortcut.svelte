<script lang="ts">
	import { cn } from '$lib/utils';

	export let className: string = '';
</script>

<span
	class={cn('text-muted-foreground ml-auto text-xs tracking-widest', className)}
	{...$$restProps}
>
	<slot />
</span>
