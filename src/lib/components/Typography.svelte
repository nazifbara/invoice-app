<script lang="ts">
	export let as = 'p';
	export let variant = 'body1';
	export let inline = false;
	export let bold = false;

	const variants: { [key: string]: string[] } = {
		h1: ['text-xl', 'md:leading-[1.88]', 'md:text-[2rem]', 'font-bold', 'dark:text-lightText'],
		h2: ['text-xl', 'leading-[1.9]', 'font-bold', 'dark:text-lightText'],
		h3: ['text-base', 'leading-[1.67]', 'font-bold', 'dark:text-lightText'],
		h4: ['text-xs', 'leading-tight', 'font-bold', 'dark:text-lightText'],
		body1: ['text-xs', 'leading-tight', 'text-darkText3', 'dark:text-lightText'],
		body2: ['text-xs', 'leading-tight', 'text-darkText2', 'dark:text-lightText2'],
		body3: ['text-[0.688rem]', 'leading-[1.64]', 'text-darkText3', 'dark:text-lightText']
	};

	const classNames = variants[variant].join(' ');
</script>

<svelte:element this={as} class="{classNames} " class:inline class:font-bold={bold}>
	<slot />
</svelte:element>
