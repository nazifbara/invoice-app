<script lang="ts">
	import Badge from '$lib/components/Badge.svelte';
</script>

<div class="grid gap-3 p-10 justify-start">
	<Badge />
	<Badge type="paid" />
	<Badge type="draft" />
</div>

<div class="grid gap-3 p-10 justify-start bg-[#141625] dark">
	<Badge />
	<Badge type="paid" />
	<Badge type="draft" />
</div>
