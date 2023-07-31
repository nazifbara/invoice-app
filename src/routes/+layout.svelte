<script lang="ts">
	import { onMount } from 'svelte';
	import { superForm } from 'sveltekit-superforms/client';
	import type { PageData } from './$types';
	import '../app.css';
	import AppBar from '$lib/components/AppBar.svelte';
	import InvoiceForm from '$lib/components/InvoiceForm.svelte';

	export let data: PageData;

	const sForm = superForm(data.form, { dataType: 'json' });
</script>

<div class={`font-base font-medium`}>
	<InvoiceForm superForm={sForm} />
	<div class="min-h-screen">
		<AppBar />
		<main
			class="max-w-[45.625rem] px-6 mx-auto py-[6.5rem] md:px-12 md:py-[8.5rem] lg:px-0 lg:py-[4.5rem] lg:pl-[6.438rem]"
		>
			<slot />
		</main>
	</div>
</div>

<style lang="postcss">
	:global(th) {
		font-weight: normal;
	}
	:global(body) {
		@apply bg-lightBg text-xs;
	}
	:global(.dark body) {
		@apply bg-darkBg;
	}
</style>
