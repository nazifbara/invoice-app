<script lang="ts">
	import Button from './Button.svelte';
	import Icon from './Icon.svelte';
</script>

<Button compact>
	<div class="flex flex-row gap-2 md:gap-4 items-center justify-center">
		<span class="w-8 aspect-square bg-white rounded-full flex items-center justify-center"
			><Icon name="plus" /></span
		>
		<span class="hidden md:inline">New Invoice</span>
		<span class="md:hidden">New</span>
	</div>
</Button>
