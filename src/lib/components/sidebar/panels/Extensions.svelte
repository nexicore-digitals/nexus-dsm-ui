<script lang="ts">
	import SearchInput from '$lib/components/SearchInput.svelte';

	let searchValue = '';
</script>

<div class="flex h-full w-full flex-col p-2">
	<div class="mb-2">
		<SearchInput bind:value={searchValue} placeholder="Search Extensions in Marketplace" />
	</div>

	<div class="flex-grow text-center">
		<p class="text-muted mt-4 text-sm">Marketplace for extensions will be implemented here.</p>
	</div>
</div>
