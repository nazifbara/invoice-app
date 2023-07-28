<script lang="ts">
	import type { Action } from 'svelte/action';

	export let as = 'p';
	export let variant = 'body1';
	export let inline = false;
	export let bold = false;
	export let action: Action = () => {};

	const variants: { [key: string]: string[] } = {
		h1: ['text-xl', 'md:leading-[1.88]', 'md:text-[2rem]', 'dark:text-lightText'],
		h2: ['text-xl', 'leading-[1.9]', 'dark:text-lightText'],
		h3: ['text-base', 'leading-[1.67]', 'dark:text-lightText'],
		h4: ['text-xs', 'leading-', 'dark:text-lightText'],
		body1: ['text-darkText3', 'dark:text-lightText'],
		body2: ['text-darkText2', 'dark:text-lightText2'],
		body3: ['leading-relaxed', 'text-darkText3', 'dark:text-lightText'],
		body4: ['text-darkText', 'dark:text-white']
	};

	const classNames = variants[variant].join(' ');
</script>

<svelte:element
	this={as}
	use:action
	class={classNames}
	class:font-bold={bold || variant.includes('h')}
	class:inline
>
	<slot />
</svelte:element>
