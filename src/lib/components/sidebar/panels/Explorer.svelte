<script lang="ts">
	import { recentProjects, type RecentProject } from '$lib/stores/project';
	import { dialog } from '$lib/stores/dialog';
	// In the future, we'll add a store to check if a folder is open.
	// For now, we'll just show the startup view.
	const isFolderOpen = false;

	/**
	 * Simulates opening a folder and adds it to the recent projects list.
	 */
	function handleOpenFolder() {
		// In a real app, this would come from a file dialog.
		const newProject: RecentProject = {
			name: `new-project-${Math.floor(Math.random() * 100)}`,
			path: `/home/user/projects/new-project-${Date.now()}`
		};

		recentProjects.update((currentProjects) => {
			// Find if a project with the same path already exists.
			const existingProject = currentProjects.find((p) => p.path === newProject.path);

			if (existingProject) {
				// If it exists, filter it out from the current list...
				const otherProjects = currentProjects.filter((p) => p.path !== newProject.path);
				// ...and prepend it to the top.
				return [existingProject, ...otherProjects];
			}
			return [newProject, ...currentProjects];
		});
	}

	/**
	 * Clears all projects from the recent projects list.
	 */
	async function handleClearRecents() {
		console.log('clearing recents');
		const confirmed = await dialog.confirm({
			title: 'Clear Recent Projects',
			message: 'Are you sure you want to clear all recent projects? This action cannot be undone.'
		});

		if (confirmed) {
			recentProjects.set([]);
		}
	}
</script>

{#if !isFolderOpen}
	<div class="flex h-full flex-col p-4">
		<div class="text-center">
			<p class="text-muted mb-4">You have not yet opened a folder.</p>
			<button class="btn btn-primary mb-2 w-full" on:click={handleOpenFolder}> Open Folder </button>
			<button class="text-primary text-sm">Clone Repository</button>
		</div>
		<div class="mt-8">
			<div class="mb-2 flex items-center justify-between px-2">
				<h3 class="text-muted text-xs font-bold uppercase">Recent</h3>
				{#if $recentProjects.length > 0}
					<button
						on:click={handleClearRecents}
						class="text-muted hover:text-foreground z-10 cursor-pointer text-xs">Clear All</button
					>
				{/if}
			</div>
			{#if $recentProjects.length > 0}
				<ul>
					{#each $recentProjects as project (project.path)}
						<li>
							<button class="hover:bg-secondary flex w-full flex-col rounded-md p-2 text-left">
								<span class="text-foreground text-sm font-medium">{project.name}</span>
								<span class="text-muted text-xs">{project.path}</span>
							</button>
						</li>
					{/each}
				</ul>
			{:else}
				<p class="text-muted px-2 text-sm">No recent folders.</p>
			{/if}
		</div>
	</div>
{:else}
	<!-- This is where the file tree will go once a folder is opened -->
{/if}
