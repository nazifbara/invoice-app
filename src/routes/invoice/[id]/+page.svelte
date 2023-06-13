<script lang="ts">
	import data from '$lib/data.json';
	import { page } from '$app/stores';
	import Typography from '$lib/components/Typography.svelte';
	import GoBackBtn from '$lib/components/GoBack.svelte';
	import Badge from '$lib/components/Badge.svelte';
	import Button from '$lib/components/Button.svelte';
	import { formatDate, formatPrice } from '$lib/utils/helpers';

	let invoice = data.find((invoice) => invoice.id === $page.params.id);
</script>

<article>
	<GoBackBtn />

	<div
		class="bg-lightBg2 dark:bg-darkBg2 p-6 mb-4 rounded-lg md:p-8 md:flex md:justify-between md:items-center"
	>
		<p class="flex justify-between items-center gap-4">
			<Typography as="span" variant="body1">Status</Typography>
			<Badge type={invoice?.status} />
		</p>
		<div
			class={`
          fixed
          inset-x-0
          bottom-0
          p-6
          bg-lightBg2
          dark:bg-darkBg2
          md:p-0
          md:relative
    `}
		>
			<div
				class={`
          flex 
          justify-between
          gap-2
          max-w-sm
          mx-auto
        `}
			>
				<Button variant="edit">Edit</Button>
				<Button variant="danger">Delete</Button>
				<Button variant="primary">Mark as Paid</Button>
			</div>
		</div>
	</div>

	<div class="bg-lightBg2 dark:bg-darkBg2 p-6 rounded-lg md:p-8">
		<div class="flex flex-col gap-7 mb-8 md:flex-row justify-between">
			<h1 class="flex flex-col gap-1">
				<Typography as="span" variant="h3" inline>
					<span class="before:content-['#'] before:text-darkText2 mb-4 sm:mb-0">
						{invoice?.id}
					</span>
				</Typography>
				<Typography as="span" variant="body2">
					{invoice?.description}
				</Typography>
			</h1>

			<ul class="grid gap-1 md:text-right">
				<Typography as="li" variant="body2">{invoice?.senderAddress.street}</Typography>
				<Typography as="li" variant="body2">{invoice?.senderAddress.city}</Typography>
				<Typography as="li" variant="body2">{invoice?.senderAddress.postCode}</Typography>
				<Typography as="li" variant="body2">{invoice?.senderAddress.country}</Typography>
			</ul>
		</div>

		<div class="grid gap-4 grid-cols-2 mb-10 md:grid-cols-3 md:mb-12 md:gap-6">
			<div>
				<div class="mb-3">
					<Typography as="h3" variant="body2">Invoice Date</Typography>
				</div>
				<Typography as="p" variant="h3">{invoice && formatDate(invoice.createdAt)}</Typography>
			</div>

			<div class="row-start-2">
				<div class="mb-3">
					<Typography as="h3" variant="body2">Payment Due</Typography>
				</div>
				<Typography as="p" variant="h3">{invoice && formatDate(invoice.paymentDue)}</Typography>
			</div>

			<div class="row-start-1 row-span-2 col-start-2">
				<div class="mb-3">
					<Typography as="h3" variant="body2">Bill To</Typography>
				</div>
				<div class="mb-2">
					<Typography as="p" variant="h3">{invoice?.clientName}</Typography>
				</div>
				<Typography as="p" variant="body2">
					{invoice?.clientAddress.street}
					<br />
					{invoice?.clientAddress.city}
					<br />
					{invoice?.clientAddress.postCode}
					<br />
					{invoice?.clientAddress.country}
				</Typography>
			</div>

			<div class="row-start-3 md:row-start-1 break-words">
				<div class="mb-3">
					<Typography as="h3" variant="body2">Sent To</Typography>
				</div>
				<Typography as="p" variant="h3">{invoice?.clientEmail}</Typography>
			</div>
		</div>

		{#if invoice?.items}
			<div>
				<div class="bg-lightBg dark:bg-darkBg3 rounded-lg overflow-hidden">
					<div class="p-6 md:p-8">
						<ul class="grid gap-6 md:hidden">
							{#each invoice.items as item}
								<li class="flex items-center justify-between">
									<div class="grid gap-2">
										<Typography as="h3" variant="h4">{item.name}</Typography>
										<Typography as="p" variant="body2" bold>
											{item.quantity} x {formatPrice(item.price)}
										</Typography>
									</div>
									<Typography as="h3" variant="h4">{formatPrice(item.total)}</Typography>
								</li>
							{/each}
						</ul>
						<table class="hidden md:flex flex-col gap-8">
							<tr class="grid grid-cols-[2fr_repeat(3,_1fr)] text-left">
								<Typography as="th" variant="body2">Item Name</Typography>
								<Typography as="th" variant="body2">QTY.</Typography>
								<Typography as="th" variant="body2">Price</Typography>
								<Typography as="th" variant="body2">Total</Typography>
							</tr>
							{#each invoice.items as item}
								<tr class="grid grid-cols-[2fr_repeat(3,_1fr)]">
									<Typography as="td" variant="body4" bold>{item.name}</Typography>
									<Typography as="td" variant="body2" bold>{item.quantity}</Typography>
									<Typography as="td" variant="body2" bold>{formatPrice(item.price)}</Typography>
									<Typography as="td" variant="body4" bold>{formatPrice(item.total)}</Typography>
								</tr>
							{/each}
						</table>
					</div>
					<p class="dark bg-draft dark:bg-darkText flex items-center justify-between p-6 md:p-8">
						<Typography as="span" variant="body1">Amount Due</Typography>
						<span class="text-xl md:text-2xl font-bold">{formatPrice(invoice.total)}</span>
					</p>
				</div>
			</div>
		{/if}
	</div>
</article>
