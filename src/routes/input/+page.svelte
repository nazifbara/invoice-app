<script lang="ts">
	import InputField from '$lib/components/InputField.svelte';
	import Select from '$lib/components/Select.svelte';

	const options = [
		{ value: '1', label: 'Net 1 Day' },
		{ value: '7', label: 'Net 7 Days' },
		{ value: '14', label: 'Net 14 Days' },
		{ value: '30', label: 'Net 30 Days' }
	];
</script>

<div class="grid gap-10 p-10 justify-start">
	<Select label="Payment Terms" {options} />
	<InputField label="Street Address" />
	<InputField type="date" label="Street Address" />
</div>

<div class="grid gap-3 p-10 justify-start bg-[#141625] dark">
	<Select label="Payment Terms" {options} />
	<InputField label="Street Address" />
	<InputField type="date" label="Street Address" />
</div>
