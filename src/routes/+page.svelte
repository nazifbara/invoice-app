<script lang="ts">
	import data from '$lib/data.json';
	import InvoiceList from '$lib/components/InvoiceList.svelte';
	import Typography from '$lib/components/Typography.svelte';
	import InvoiceBtn from '$lib/components/InvoiceBtn.svelte';
	import Icon from '$lib/components/Icon.svelte';
</script>

<div class="grid gap-8 md:gap-14">
	<div class="flex items-center justify-between">
		<div>
			<Typography as="h1" variant="h1">Invoices</Typography>
			<Typography as="p" variant="body1">
				<span class="hidden md:inline">There are {data.length} total invoices</span>
				<span class="md:hidden">{data.length} invoices</span>
			</Typography>
		</div>
		<div class="flex gap-[1.125rem] md:gap-10">
			<button class="flex items-center gap-3 md:gap-4">
				<Typography as="span" variant="body4" bold>
					<span class="hidden md:inline">Filter by status</span>
					<span class="md:hidden">Filter</span>
				</Typography>
				<Icon name="arrowDown" />
			</button>
			<InvoiceBtn />
		</div>
	</div>
	<InvoiceList {data} />
</div>
