<script lang="ts">
	import { MenubarTrigger, MenubarContent, MenubarShortcut } from '$lib/components/ui/menubar';
	import MenubarRoot from './ui/menubar/MenubarRoot.svelte';
	import MenubarItem from './ui/menubar/MenubarItem.svelte';
	import { setActiveMenu, Menu } from '$lib/stores/menu';

	function handleClick(id: string) {
		setActiveMenu(id);
	}
</script>

<MenubarRoot>
	{#each $Menu as menuItem (menuItem.id)}
		<div class="h-8 w-10">
			<MenubarTrigger data-state="closed" data-side="left" onclick={() => handleClick(menuItem.id)}
				>{menuItem.label}</MenubarTrigger
			>
			<MenubarContent className="" id={menuItem.id} active={menuItem.active}>
				{#each menuItem.items as subMenuItem, index (index)}
					<MenubarItem>
						{#if subMenuItem.type === 'action'}
							{subMenuItem.label} <MenubarShortcut>⌘{subMenuItem.accelerator}</MenubarShortcut>
						{/if}
						{#if subMenuItem.type === 'submenu'}
							{subMenuItem.label}
						{/if}
					</MenubarItem>
				{/each}
			</MenubarContent>
		</div>
	{/each}
</MenubarRoot>
