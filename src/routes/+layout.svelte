<script>
	import '../app.css';
	import AppBar from '$lib/components/AppBar.svelte';
</script>

<div class="font-base font-medium text-xs">
	<AppBar />
	<main
		class="max-w-[45.625rem] mx-auto pt-[6.5rem] md:pt-[8.5rem] lg:pt-[4.5rem] lg:pl-[6.438rem]"
	>
		<slot />
	</main>
</div>
