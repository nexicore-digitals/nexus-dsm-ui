<script lang="ts">
	import SearchInput from '$lib/components/SearchInput.svelte';

	let searchValue = '';
</script>

<div class="flex h-full w-full flex-col p-2">
	<div class="mb-2">
		<SearchInput bind:value={searchValue} placeholder="Search" />
	</div>
	<!-- Future search results will go here -->
</div>
