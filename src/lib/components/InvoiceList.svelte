<script lang="ts">
	import type { Invoice } from '$lib/utils/types';
	import { formatPrice, formatDate, getInvoiceTotal, getDueDate } from '$lib/utils/helpers';

	import Badge from '$lib/components/Badge.svelte';
	import ID from '$lib/components/ID.svelte';
	import Icon from './Icon.svelte';
	import Typography from './Typography.svelte';

	export let invoices: Invoice[] = [];
</script>

<ul class="grid gap-4">
	{#each invoices as invoice (invoice.id)}
		<li>
			<a
				href="/invoice/{invoice.id}"
				class={`
          grid 
          grid-cols-2
          grid-rows-[repeat(3,_auto)]
          gap-2
          p-6
          bg-white
          rounded-lg
          shadow
          border
          border-transparent
          hover:border-primary
          transition-colors
          sm:grid-cols-[repeat(4,_auto),_6.5rem,_auto]
          sm:grid-rows-1
          sm:items-center
          sm:gap-5
          dark:bg-darkBg2
        `}
			>
				<ID id={invoice.id} typoVariant="h4" />
				<span class="self-center sm:col-start-2">
					<Typography as="span" variant="body2">
						{#if invoice.invoiceDate}
							Due {formatDate(
								getDueDate(new Date(invoice.invoiceDate), Number(invoice.paymentTerms))
							)}
						{/if}
					</Typography>
				</span>
				<span class="col-start-2 row-start-1 mb-4 sm:mb-0 sm:col-start-3">
					<Typography as="span" variant="body1">{invoice.clientName}</Typography>
				</span>
				<span
					class="col-start-1 row-start-3 self-center sm:col-start-4 sm:row-start-1 sm:justify-self-end"
				>
					<Typography as="span" variant="h3">{formatPrice(getInvoiceTotal(invoice))}</Typography>
				</span>
				<span class="row-span-2 sm:col-start-5 sm:row-span-1"><Badge type={invoice.status} /></span>
				<span class="hidden sm:inline"><Icon name="arrowRight" /></span>
			</a>
		</li>
	{/each}
</ul>
