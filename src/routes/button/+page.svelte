<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import InvoiceBtn from '$lib/components/InvoiceBtn.svelte';
	import Typography from '$lib/components/Typography.svelte';
</script>

<Typography el="h2" variant="h1">Custom</Typography>
<div class="grid gap-3 p-10 justify-start">
	<InvoiceBtn />
</div>

<Typography el="h2" variant="h1">Base</Typography>

<div class="grid gap-3 p-10 justify-start">
	<Button variant="primary">Primary button</Button>
	<Button variant="edit">Edit button</Button>
	<Button variant="save">Save button</Button>
	<Button variant="danger">Save button</Button>
</div>

<div class="grid gap-3 p-10 justify-start bg-[#141625] dark">
	<Button variant="primary">Primary button</Button>
	<Button variant="edit">Edit button</Button>
	<Button variant="save">Save button</Button>
	<Button variant="danger">Save button</Button>
</div>
