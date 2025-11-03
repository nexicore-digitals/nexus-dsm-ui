<script lang="ts">
	import { Search } from '@lucide/svelte/icons';

	export let value = '';
	export let placeholder = 'Search...';
</script>

<div class="relative w-full">
	<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
		<Search class="text-muted h-4 w-4" />
	</div>
	<input
		type="search"
		bind:value
		{placeholder}
		class="bg-input text-foreground focus:ring-primary focus:ring-offset-background block w-full rounded-md border-0 p-2 pl-10 text-sm focus:ring-2 focus:ring-offset-2"
	/>
</div>
