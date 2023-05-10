<script lang="ts">
	import data from '$lib/data.json';
	import InvoiceList from '$lib/components/InvoiceList.svelte';
</script>

<div class="p-6 bg-[#F8F8FB]">
	<InvoiceList {data} />
</div>

<div class="p-6 bg-[#141625] dark">
	<InvoiceList {data} />
</div>
