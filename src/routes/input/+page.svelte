<script lang="ts">
	import TextField from '$lib/components/TextField.svelte';
	import Dropdown from '$lib/components/Dropdown.svelte';

	const options = [
		{ value: '1', label: 'Net 1 Day' },
		{ value: '7', label: 'Net 7 Days' },
		{ value: '14', label: 'Net 14 Days' },
		{ value: '30', label: 'Net 30 Days' }
	];
</script>

<div class="grid gap-10 p-10 justify-start">
	<Dropdown label="Payment Terms" {options} />
	<TextField label="Street Address" />
</div>

<div class="grid gap-3 p-10 justify-start bg-[#141625] dark">
	<Dropdown label="Payment Terms" {options} />
	<TextField label="Street Address" />
</div>
