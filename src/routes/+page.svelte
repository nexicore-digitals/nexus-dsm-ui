<script>
	import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte';
</script>

<div class="flex min-h-screen flex-col items-center justify-center p-8">
	<div class="bg-card text-card-foreground w-full max-w-md rounded-lg border p-6 shadow-lg">
		<div class="flex flex-col space-y-4">
			<h1 class="text-2xl font-semibold tracking-tight">Welcome to Nexus DSM UI</h1>
			<p class="text-muted-foreground">
				This is a demo page to showcase the theming system. Use the dropdown below to switch between
				themes.
			</p>

			<div class="flex items-center space-x-2 pt-4">
				<button class="btn btn-primary">Primary Button</button>
				<button class="btn btn-secondary">Secondary Button</button>
			</div>
			<ThemeSwitcher />
		</div>
	</div>
</div>
