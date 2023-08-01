<script lang="ts">
	import { createPopover } from '@melt-ui/svelte';
	import { fly } from 'svelte/transition';

	import InvoiceList from '$lib/components/InvoiceList.svelte';
	import Typography from '$lib/components/Typography.svelte';
	import InvoiceBtn from '$lib/components/InvoiceBtn.svelte';
	import Checkbox from '$lib/components/Checkbox.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import { invoices } from '$lib/utils/stores';

	const conjunctionFormatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });

	const { trigger, content, open } = createPopover();

	let selectedStatus: string[] = [];

	$: countMessage = (() => {
		if ((selectedStatus.length === 3 || selectedStatus.length === 0) && $invoices.length === 0) {
			return 'No invoices';
		} else if (
			(selectedStatus.length === 3 || selectedStatus.length === 0) &&
			$invoices.length !== 0
		) {
			return `${$invoices.length} total invoice(s)`;
		}

		let count: { [key: string]: number } = selectedStatus.reduce(
			(prev, curr) => ({ ...prev, [curr]: 0 }),
			{}
		);
		filteredInvoices.forEach((invoices) => {
			const status = invoices.status;
			count[status] = count[status] + 1;
		});
		return `${conjunctionFormatter.format(
			Object.entries(count).map(([status, value]) => `${value} ${status}`)
		)} invoice(s)`;
	})();

	$: filteredInvoices = (() => {
		if (selectedStatus.length === 0) return $invoices;
		return $invoices.filter((invoice) => selectedStatus.includes(invoice.status));
	})();
</script>

<div class="grid gap-8 md:gap-14">
	<div class="flex items-center justify-between">
		<div>
			<Typography as="h1" variant="h1">Invoices</Typography>
			<Typography as="p" variant="body1">
				{countMessage}
			</Typography>
		</div>
		<div class="flex items-center gap-[1.125rem] md:gap-10">
			<div>
				<button melt={$trigger} class="flex items-center py-4 gap-3 md:gap-4">
					<Typography as="span" variant="body4" bold>
						<span class="hidden md:inline">Filter by status</span>
						<span class="md:hidden">Filter</span>
					</Typography>
					<Icon name="arrowDown" />
				</button>
				{#if $open}
					<div
						melt={$content}
						class="grid gap-4 z-10 w-60 rounded-lg bg-lightBg2 dark:bg-darkBg3 p-6 shadow-xl"
						transition:fly={{ y: -24 }}
					>
						{#each ['Draft', 'Pending', 'Paid'] as status}
							<Checkbox
								labelText={status}
								checked={selectedStatus.includes(status.toLowerCase())}
								on:change={(e) => {
									let loweredStatus = status.toLowerCase();
									if (e?.target?.checked) {
										selectedStatus = [...selectedStatus, loweredStatus];
									} else {
										selectedStatus.splice(
											selectedStatus.findIndex((filter) => filter === loweredStatus),
											1
										);
										selectedStatus = selectedStatus;
									}
								}}
							/>
						{/each}
					</div>
				{/if}
			</div>
			<InvoiceBtn />
		</div>
	</div>
	<InvoiceList invoices={filteredInvoices} />
</div>
