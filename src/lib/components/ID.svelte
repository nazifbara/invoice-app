<script lang="ts">
	import Typography from './Typography.svelte';

	export let id = 'ID';
	export let typoVariant = 'h4';
</script>

<Typography as="span" variant={typoVariant} inline>
	<span class="font-bold before:content-['#'] before:text-darkText2">
		{id}
	</span>
</Typography>
