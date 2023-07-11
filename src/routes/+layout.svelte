<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import type { PageData } from './$types';
	import '../app.css';
	import { theme } from '$lib/utils/stores';
	import AppBar from '$lib/components/AppBar.svelte';
	import InvoiceForm from '$lib/components/InvoiceForm.svelte';

	export let data: PageData;

	const sForm = superForm(data.form, { dataType: 'json' });
</script>

<div class={`${$theme} font-base font-medium text-xs`}>
	<InvoiceForm superForm={sForm} />
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
	:global(th) {
		font-weight: normal;
	}
</style>
