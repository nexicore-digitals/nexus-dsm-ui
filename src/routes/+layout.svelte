<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import '$lib/stores/theme'; // Import to initialize the theme store

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="text-foreground bg-[var(--theme-background)]">
	{@render children?.()}
</div>
