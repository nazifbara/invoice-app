<script lang="ts">
	import { fade, fly } from 'svelte/transition';

	import { invoiceForm } from '$lib/stores';

	import GoBack from '$lib/components/GoBack.svelte';

	$: formIsOpen = $invoiceForm.opened;
</script>

{#if formIsOpen}
	<button
		transition:fade
		class="fixed inset-0 bg-black opacity-50 z-10"
		on:click={invoiceForm.close}
	/>
	<div
		transition:fly={{ x: -300 }}
		class={`
      fixed
      w-full
      max-w-[38.5rem]
      bg-lightBg2
      dark:bg-darkBg
      overflow-y-scroll
      z-20
      right-0
      left-0
      bottom-0
      top-[4.5rem]
      md:rounded-tr-[1.25rem]
      md:rounded-br-[1.25rem]
      lg:pl-[6.438rem]
      lg:max-w-[44.938rem]
      lg:inset-y-0
  `}
	>
		<form class="px-6 py-8 md:p-14">
			<span class="md:hidden"><GoBack as="button" on:click={invoiceForm.close} /></span>
			<h1>Form</h1>
		</form>
	</div>
{/if}
