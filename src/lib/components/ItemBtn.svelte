<script lang="ts">
	import Button from './Button.svelte';
	import Icon from './Icon.svelte';
</script>

<Button on:click variant="edit">
	<span class="flex flex-row gap-1 items-center justify-center"
		><Icon name="plus" /> Add New Item</span
	>
</Button>

<style lang="postcss">
	span :global(path) {
		fill: theme(colors.darkText2);
	}
</style>
