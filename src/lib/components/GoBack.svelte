<script lang="ts">
	import Typography from '$lib/components/Typography.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import type { IconName } from '$lib/utils/types';

	export let as: 'link' | 'button' = 'link';
	export let href = '/';

	const containerClass = 'flex justify-start items-center gap-6 mb-8';
	const content = {
		icon: 'arrowLeft' as IconName,
		text: 'Go back',
		typographyProps: {
			as: 'span',
			variant: 'body4',
			bold: true
		}
	};
</script>

{#if as === 'link'}
	<a {href} class={containerClass}>
		<Icon name={content.icon} />
		<Typography {...content.typographyProps}>Go back</Typography>
	</a>
{:else}
	<button on:click class={containerClass}>
		<Icon name={content.icon} />
		<Typography {...content.typographyProps}>Go back</Typography>
	</button>
{/if}
