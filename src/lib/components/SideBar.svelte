<!-- Sidebar.svelte -->
<script lang="ts">
	import {
		activeSidebarId,
		topSidebarItems,
		overflowSidebarItems,
		bottomSidebarItem
	} from '$lib/stores/sidebar';
	import StatusItem from './ui/statusbar/StatusItem.svelte';
	import '$lib/styles/sidebar.css';
	import { loadCoreSidebarItems } from '$lib/utils/sidebar';

	function activate(id: string) {
		activeSidebarId.set(id);
	}
	loadCoreSidebarItems();

	let showOverflow = false;
</script>

<div class="sidebar">
	<!-- Top zone -->
	<div class="sidebar-top">
		{#each $topSidebarItems as item (item.id)}
			<StatusItem icon={item.icon} tooltip={item.tooltip} onClick={() => activate(item.id)} />
		{/each}

		{#if $overflowSidebarItems.length > 0}
			<StatusItem icon="⋯" tooltip="More" onClick={() => (showOverflow = !showOverflow)} />
		{/if}
	</div>

	<!-- Bottom zone -->
	<div class="sidebar-bottom">
		{#if $bottomSidebarItem}
			{#each $bottomSidebarItem as sidebarItem (sidebarItem.id)}
				<StatusItem
					icon={sidebarItem.icon}
					tooltip={sidebarItem.tooltip}
					onClick={() => activate(sidebarItem.id)}
				/>
			{/each}
		{/if}
	</div>

	<!-- Overflow panel -->
	{#if showOverflow}
		<div class="sidebar-overflow">
			{#each $overflowSidebarItems as item (item.id)}
				<StatusItem icon={item.icon} tooltip={item.tooltip} onClick={() => activate(item.id)} />
			{/each}
		</div>
	{/if}
</div>
