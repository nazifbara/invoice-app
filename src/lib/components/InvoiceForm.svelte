<script lang="ts">
	import { fade, fly } from 'svelte/transition';

	import { page } from '$app/stores';
	import { invoiceModal, invoices } from '$lib/utils/stores';
	import type { invoiceSchema } from '$lib/utils/zod';
	import GoBack from '$lib/components/GoBack.svelte';
	import Typography from './Typography.svelte';
	import InputField from './InputField.svelte';
	import Select from './Select.svelte';
	import Icon from './Icon.svelte';
	import ItemBtn from './ItemBtn.svelte';
	import Button from './Button.svelte';
	import type { SuperForm } from 'sveltekit-superforms/client';
	import { getInvoiceItemTotal } from '$lib/utils/helpers';

	export let superForm: SuperForm<typeof invoiceSchema>;
	$: params = $page.params;

	const form = superForm.form;
	let posted = superForm.posted;
	let errors = superForm.errors;
	const constraints = superForm.constraints;
	const emptyMessage = "cant't be empty";
	let enhance = superForm.enhance;
	const formGroupClass = 'grid gap-6 [&>h3]:!text-primary';
	const locationClass =
		'grid grid-cols-2 gap-6 [&>:last-child]:col-span-2 md:grid-cols-3 md:[&>:last-child]:col-span-1';

	$: if ($posted && Object.keys($errors).length === 0) {
		if (params.id) {
			invoices.edit(params.id, $form);
		} else {
			invoices.save($form);
		}

		cancel();
		superForm.reset();
	}

	$: formIsOpen = $invoiceModal.opened;

	$: isItemInputValid = (index: number, field: 'name' | 'quantity' | 'price') =>
		Boolean($errors.items && $errors.items[index] && $errors.items[index][field]);

	$: if (params.id) {
		const invoice = invoices.getById(params.id);
		if (invoice) {
			form.update(() => invoice, { taint: false });
		}
	} else {
		superForm.reset();
	}

	const removeItem = (index: number) => {
		form.update((values) => {
			const items = [...values.items.slice(0, index), ...values.items.slice(index + 1)];
			return { ...values, items };
		});
	};

	const addItem = () =>
		form.update((values) => {
			const items = [...values.items, { name: '', quantity: 0, price: 0 }];
			return { ...values, items };
		});

	const discard = () => {
		superForm.reset();
		cancel();
	};

	const cancel = () => invoiceModal.close();
</script>

{#if formIsOpen}
	<button
		transition:fade
		class="fixed inset-0 bg-black opacity-50 z-10"
		on:click={invoiceModal.close}
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
		<form class="px-6 py-8 md:px-14 [&>h2]:mb-6 relative" method="POST" use:enhance>
			<span class="md:hidden"><GoBack as="button" on:click={invoiceModal.close} /></span>
			{#if params.id}
				<Typography as="h2" variant="h2">Edit #{params.id}</Typography>
			{:else}
				<Typography as="h2" variant="h2">New Invoice</Typography>
			{/if}

			<section class="grid gap-10 mb-14">
				<div class={formGroupClass}>
					<Typography as="h3" variant="body1" bold>Bill From</Typography>

					<InputField
						invalid={Boolean($errors.senderAddress?.street)}
						errorMessage={$errors.senderAddress?.street ? emptyMessage : ''}
						label="Street Address"
						name="senderStreet"
						bind:value={$form.senderAddress.street}
						{...$constraints.senderAddress?.street}
					/>
					<div class={locationClass}>
						<InputField
							invalid={Boolean($errors.senderAddress?.city)}
							label="City"
							name="senderCity"
							bind:value={$form.senderAddress.city}
							{...$constraints.senderAddress?.city}
						/>
						<InputField
							invalid={Boolean($errors.senderAddress?.postCode)}
							label="Post Code"
							name="senderPostCode"
							bind:value={$form.senderAddress.postCode}
							{...$constraints.senderAddress?.postCode}
						/>
						<InputField
							invalid={Boolean($errors.senderAddress?.country)}
							label="Country"
							name="senderCountry"
							bind:value={$form.senderAddress.country}
							{...$constraints.senderAddress?.country}
						/>
					</div>
				</div>

				<div class={formGroupClass}>
					<Typography as="h3" variant="body1" bold>Bill To</Typography>
					<InputField
						invalid={Boolean($errors.clientName)}
						errorMessage={$errors.clientName ? emptyMessage : ''}
						label="Client's Name"
						name="clientName"
						bind:value={$form.clientName}
						{...$constraints.clientName}
					/>
					<InputField
						invalid={Boolean($errors.clientEmail)}
						errorMessage={$errors.clientEmail ? emptyMessage : ''}
						label="Client's Email"
						name="clientEmail"
						bind:value={$form.clientEmail}
						{...$constraints.clientEmail}
					/>
					<InputField
						invalid={Boolean($errors.clientAddress?.street)}
						errorMessage={$errors.clientAddress?.street ? emptyMessage : ''}
						label="Street Address"
						name="clientStreet"
						bind:value={$form.clientAddress.street}
						{...$constraints.clientAddress?.street}
					/>
					<div class={locationClass}>
						<InputField
							invalid={Boolean($errors.clientAddress?.city)}
							label="City"
							name="clientCity"
							bind:value={$form.clientAddress.city}
							{...$constraints.clientAddress?.city}
						/>
						<InputField
							invalid={Boolean($errors.clientAddress?.postCode)}
							label="Post Code"
							name="clientPostCode"
							bind:value={$form.clientAddress.postCode}
							{...$constraints.clientAddress?.postCode}
						/>
						<InputField
							invalid={Boolean($errors.clientAddress?.country)}
							label="Country"
							name="clientCountry"
							bind:value={$form.clientAddress.country}
							{...$constraints.clientAddress?.country}
						/>
					</div>
					<div class="grid gap-6 pt-4 md:grid-cols-2 md:pt-6">
						<InputField
							invalid={Boolean($errors.invoiceDate)}
							label="Invoice Date"
							name="invoiceDate"
							type="date"
							bind:value={$form.invoiceDate}
							{...$constraints.invoiceDate}
						/>
						<Select
							label="Payement Terms"
							options={[
								{ label: 'Net 1 Day', value: '1' },
								{ label: 'Net 7 Days', value: '7' },
								{ label: 'Net 14 Days', value: '14' },
								{ label: 'Net 30 Days', value: '30' }
							]}
							bind:value={$form.paymentTerms}
							{...$constraints.paymentTerms}
						/>
					</div>
					<InputField
						invalid={Boolean($errors.description)}
						label="Project Description"
						name="description"
						bind:value={$form.description}
						{...$constraints.description}
					/>
				</div>
			</section>

			<section class="mb-12">
				<h3 class="!text-[#777F98] font-bold text-lg mb-6">Item List</h3>

				<div class="grid gap-12">
					{#each $form.items as _, i}
						<div class={formGroupClass}>
							<div
								class={`
                grid
                grid-cols-[minmax(0,_2fr),_minmax(0,_3fr),_minmax(0,_2fr),_minmax(0,_1fr)]
                items-center
                gap-4
                [&>:first-child]:col-span-4
                md:grid-cols-[minmax(0,_8fr),_repeat(3,_minmax(0,_3fr)),_minmax(0,_auto)]
                md:[&>:first-child]:col-span-1
            `}
							>
								<InputField
									invalid={isItemInputValid(i, 'name')}
									label="Item Name"
									name={`item-${i}`}
									bind:value={$form.items[i].name}
								/>
								<InputField
									invalid={isItemInputValid(i, 'quantity')}
									label="Qty"
									type="number"
									name={`item-qty-${i}`}
									bind:value={$form.items[i].quantity}
								/>
								<InputField
									invalid={isItemInputValid(i, 'price')}
									label="Price"
									type="number"
									name={`item-${i}-price`}
									bind:value={$form.items[i].price}
								/>
								<InputField
									disabled
									label="Total"
									name={`item-${i}-total`}
									value={getInvoiceItemTotal($form.items[i])}
								/>
								<button
									type="button"
									on:click={() => removeItem(i)}
									class="translate-y-3/4 place-self-center"><Icon name="delete" /></button
								>
							</div>
						</div>
					{/each}
					<ItemBtn on:click={addItem} />
				</div>
			</section>

			{#if Object.keys($errors).length !== 0}
				<ul class="text-danger mb-32 md:mb-11">
					<li>- All fields must be added</li>
					{#if $errors.items}
						<li>- An item must be added</li>
					{/if}
				</ul>
			{/if}

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
				{#if params.id}
					<div class="flex gap-2 justify-end">
						<Button type="button" variant="edit" on:click={cancel}>Cancel</Button>
						<Button type="submit">Save Change</Button>
					</div>
				{:else}
					<div class="flex justify-between">
						<Button type="button" variant="edit" on:click={discard}>Discard</Button>
						<div class="flex gap-2">
							<Button
								type="button"
								variant="save"
								on:click={() => {
									invoices.save($form, true);
									cancel();
									superForm.reset();
								}}>Save as draft</Button
							>
							<Button type="submit">Save & Send</Button>
						</div>
					</div>
				{/if}
			</div>
		</form>
	</div>
{/if}
