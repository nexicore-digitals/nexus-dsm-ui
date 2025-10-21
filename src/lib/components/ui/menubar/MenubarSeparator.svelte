<script lang="ts">
	import { cn } from '$lib/utils';

	export let className: string = '';
</script>

<div class={cn('bg-muted -mx-1 my-1 h-px', className)} role="separator" {...$$restProps}></div>
