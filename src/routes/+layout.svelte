<script>
	import '../app.css';
	import AppBar from '$lib/components/AppBar.svelte';
</script>

<div class="font-base font-medium text-xs">
	<div class="bg-lightBg dark:bg-darkBg min-h-screen">
		<AppBar />
		<main
			class="max-w-[45.625rem] px-6 mx-auto py-[6.5rem] md:px-12 md:py-[8.5rem] lg:px-0 lg:py-[4.5rem] lg:pl-[6.438rem]"
		>
			<slot />
		</main>
	</div>
</div>

<style>
	:global(.dark *) {
		color: white;
	}

	:global(th) {
		font-weight: normal;
	}
</style>
