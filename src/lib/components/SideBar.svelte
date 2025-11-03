<!-- Sidebar.svelte -->
<script lang="ts">
	import {
		isSidebarOpen,
		activeSidebarId,
		topSidebarItems,
		overflowSidebarItems,
		bottomSidebarItem
	} from '$lib/stores/sidebar';
	import StatusItem from './ui/statusbar/StatusItem.svelte';
	import '$lib/styles/sidebar.css';
	import { loadCoreSidebarItems } from '$lib/utils/sidebar';
	import Expandable from './ui/sidebar/Expandable.svelte';
	import Explorer from './sidebar/panels/Explorer.svelte';
	import Search from './sidebar/panels/Search.svelte';
	import Extensions from './sidebar/panels/Extensions.svelte';
	import type { Component } from 'svelte';

	const panelComponents: Record<string, Component> = {
		explorer: Explorer,
		search: Search,
		extensions: Extensions
	};

	function activate(id: string | null) {
		// If the clicked item is already active, close the sidebar. Otherwise, open it.
		if (id && $activeSidebarId === id) {
			activeSidebarId.set(null);
		} else {
			activeSidebarId.set(id);
		}
	}
	loadCoreSidebarItems();

	let showOverflow = false;
	$: activePanel = $activeSidebarId ? panelComponents[$activeSidebarId] : null;
</script>

<div class="sidebar-container">
	<div class="sidebar">
		<!-- Top zone -->
		<div class="sidebar-top">
			{#each $topSidebarItems as item (item.id)}
				<StatusItem
					icon={item.icon}
					tooltip={item.tooltip}
					onClick={() => activate(item.id)}
					isActive={$activeSidebarId === item.id}
				/>
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
						isActive={$activeSidebarId === sidebarItem.id}
					/>
				{/each}
			{/if}
		</div>

		<!-- Overflow panel -->
		{#if showOverflow}
			<div class="sidebar-overflow">
				{#each $overflowSidebarItems as item (item.id)}
					<StatusItem
						icon={item.icon}
						tooltip={item.tooltip}
						onClick={() => activate(item.id)}
						isActive={$activeSidebarId === item.id}
					/>
				{/each}
			</div>
		{/if}
	</div>
	<Expandable open={$isSidebarOpen}>
		{#if activePanel}
			<svelte:component this={activePanel} />
		{/if}
	</Expandable>
</div>
