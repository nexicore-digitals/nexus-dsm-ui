<script lang="ts">
	import { dialog } from '$lib/stores/dialog';
	import { fade } from 'svelte/transition';

	function handleConfirm() {
		dialog.close(true);
	}

	function handleCancel() {
		dialog.close(false);
	}
</script>

{#if $dialog.isOpen && $dialog.options}
	<div
		class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
		transition:fade={{ duration: 150 }}
		on:click={handleCancel}
		on:keydown={(e) => e.key === 'Escape' && handleCancel()}
		role="dialog"
		aria-modal="true"
		aria-labelledby="dialog-title"
		tabindex="-1"
	>
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<div
			class="bg-sidebar ui-border w-full max-w-md rounded-lg border p-6 shadow-lg"
			on:click|stopPropagation
			transition:fade={{ duration: 150 }}
			tabindex="0"
			role="dialog"
			aria-modal="true"
			aria-labelledby="dialog-title"
		>
			<h2 id="dialog-title" class="text-foreground mb-2 text-lg font-semibold">
				{$dialog.options.title}
			</h2>
			<p class="text-muted mb-6 text-sm">{$dialog.options.message}</p>
			<div class="flex justify-end gap-2">
				<button class="btn" on:click={handleCancel}>{$dialog.options.cancelText || 'Cancel'}</button
				>
				<button class="btn btn-primary" on:click={handleConfirm}
					>{$dialog.options.confirmText || 'Confirm'}</button
				>
			</div>
		</div>
	</div>
{/if}
