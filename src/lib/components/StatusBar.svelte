<script lang="ts">
	import { statusRegistry } from '$lib/stores/status';
	import type { StatusItemMeta } from '$lib/types/statusbar';
	import { loadCoreStatusItems } from '$lib/utils/status';
	import StatusItem from './ui/statusbar/StatusItem.svelte';
	import '$lib/styles/statusbar.css';

	let contextItems: StatusItemMeta[] = [];
	let actionItems: StatusItemMeta[] = [];

	$: contextItems = $statusRegistry.context;
	$: actionItems = $statusRegistry.action;
	loadCoreStatusItems();
</script>

<div class="status-bar" data-testid="statusbar">
	<div class="status-left" id="Contextual indicators">
		{#each contextItems as item (item.id)}
			<StatusItem {...item} />
		{/each}
	</div>
	<div class="status-right" id="Interactive tools">
		{#each actionItems as item (item.id)}
			<StatusItem {...item} />
		{/each}
	</div>
</div>
