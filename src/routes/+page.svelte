<script lang="ts">
	import EditorHeader from '$lib/components/EditorHeader.svelte';
	import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte';
	import { activeMenuId, setActiveMenu } from '$lib/stores/menu';
	function closeAllMenus(
		e?: MouseEvent & {
			currentTarget: EventTarget & HTMLDivElement;
		}
	) {
		if ($activeMenuId !== '' && $activeMenuId !== null) {
			if ((e?.target as HTMLElement)?.tagName === 'BUTTON') return;
			setActiveMenu('');
		}
	}
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	class="flex min-h-screen flex-col"
	onclick={(e) => closeAllMenus(e)}
	onkeydown={(e) => {
		if (e.key === 'Escape') closeAllMenus();
	}}
>
	<EditorHeader />
	<ThemeSwitcher />
</div>
