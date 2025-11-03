<script lang="ts">
	let { open }: { open: boolean } = $props();
</script>

<div
	class="bg-sidebar absolute left-[40.5px] h-full transition-transform duration-200 ease-in-out"
	class:w-[20%]={open}
	class:w-0={!open}
>
	<slot />
</div>
