<script lang="ts">
	import { fade, fly } from 'svelte/transition';

	import { invoiceForm } from '$lib/stores';

	import GoBack from '$lib/components/GoBack.svelte';
	import Typography from './Typography.svelte';
	import InputField from './InputField.svelte';
	import Select from './Select.svelte';
	import Icon from './Icon.svelte';
	import ItemBtn from './ItemBtn.svelte';
	import Button from './Button.svelte';

	$: formIsOpen = $invoiceForm.opened;

	const formGroupClass = 'grid gap-6 [&>h3]:!text-primary';
	const locationClass =
		'grid grid-cols-2 gap-6 [&>:last-child]:col-span-2 md:grid-cols-3 md:[&>:last-child]:col-span-1';

	let items = [
		{
			name: 'Banner Design',
			quantity: 1,
			price: 156,
			total: 156
		},
		{
			name: 'Email Design',
			quantity: 2,
			price: 200,
			total: 400
		}
	];

	const removeItem = (index: number) => {
		items.splice(index, 1);
		items = items;
	};

	const addItem = () => (items = [...items, { name: '', quantity: 0, price: 0, total: 0 }]);
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
      overflow-x-hidden
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
		<form class="px-6 py-8 md:px-14 [&>h2]:mb-6 relative">
			<span class="md:hidden"><GoBack as="button" on:click={invoiceForm.close} /></span>
			<Typography as="h2" variant="h2">New Invoice</Typography>

			<section class="grid gap-10 mb-14">
				<div class={formGroupClass}>
					<Typography as="h3" variant="body1" bold>Bill From</Typography>

					<InputField label="Street Address" name="senderStreet" />
					<div class={locationClass}>
						<InputField label="City" name="senderCity" />
						<InputField label="Post Code" name="senderPostCode" />
						<InputField label="Country" name="senderCountry" />
					</div>
				</div>

				<div class={formGroupClass}>
					<Typography as="h3" variant="body1" bold>Bill To</Typography>
					<InputField label="Client's Name" name="clientName" />
					<InputField label="Client's Email" name="clientEmail" />
					<InputField label="Street Address" name="clientStreet" />
					<div class={locationClass}>
						<InputField label="City" name="clientCity" />
						<InputField label="Post Code" name="clientPostCode" />
						<InputField label="Country" name="clientCountry" />
					</div>
					<div class="grid gap-6 pt-4 md:grid-cols-2 md:pt-6">
						<InputField label="Invoice Date" name="invoiceDate" type="date" />
						<Select
							label="Payement Terms"
							options={[
								{ label: 'Net 1 Day', value: '1' },
								{ label: 'Net 7 Days', value: '7' },
								{ label: 'Net 14 Days', value: '14' },
								{ label: 'Net 30 Days', value: '30' }
							]}
						/>
					</div>
					<InputField label="Project Description" name="description" />
				</div>
			</section>

			<section class="mb-32 md:mb-12">
				<h3 class="!text-[#777F98] font-bold text-lg mb-6">Item List</h3>

				<div class="grid gap-12">
					{#each items as item, i}
						<div class={formGroupClass}>
							<div
								class={`
                grid
                grid-cols-[minmax(0,_2fr),_minmax(0,_3fr),_minmax(0,_2fr),_minmax(0,_1fr)]
                items-center
                gap-4
                [&>:first-child]:col-span-4
                md:grid-cols-[minmax(0,_8fr),_minmax(0,_2fr),_repeat(2,_minmax(0,_3fr)),_minmax(0,_auto)]
                md:[&>:first-child]:col-span-1
            `}
							>
								<InputField label="Item Name" name={`item-${i}`} value={item.name} />
								<InputField label="Qty" name={`item-qty-${i}`} value={item.quantity.toString()} />
								<InputField label="Price" name={`item-${i}-price`} value={item.price.toString()} />
								<InputField
									disabled
									label="Total"
									name={`item-${i}-total`}
									value={item.total.toString()}
								/>
								<button on:click={() => removeItem(i)} class="translate-y-3/4 place-self-center"
									><Icon name="delete" /></button
								>
							</div>
						</div>
					{/each}
					<ItemBtn on:click={addItem} />
				</div>
			</section>

			<div
				class={`
          absolute
          bottom-0
          right-0
          left-0
          p-6
          bg-lightBg2
          dark:bg-darkBg2
          md:relative
          md:bg-transparent
          md:dark:bg-transparent
          md:p-0
        `}
			>
				<div class="flex justify-between">
					<Button variant="edit">Discard</Button>
					<div class="flex gap-2">
						<Button variant="save">Save as draft</Button>
						<Button type="submit">Save & Send</Button>
					</div>
				</div>
			</div>
		</form>
	</div>
{/if}
