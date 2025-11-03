<script lang="ts">
	import '../app.css';
	import '../bg.css';
	import '../text.css';
	import favicon from '$lib/assets/favicon.svg';
	import Dialog from '$lib/components/Dialog.svelte';
	import '$lib/stores/theme'; // Import to initialize the theme store

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="text-foreground bg-[var(--theme-background)]">
	{@render children?.()}
	<Dialog />
</div>
