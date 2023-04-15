<script lang="ts">
	export let el = 'p';
	export let variant = 'body1';

	const variants: { [key: string]: string[] } = {
		h1: ['text-xl', 'md:leading-[1.88]', 'md:text-[2rem]', 'font-bold'],
		h2: ['text-xl', 'leading-[1.9]', 'font-bold'],
		h3: ['text-base', 'leading-[1.67]', 'font-bold'],
		h4: ['text-xs', 'leading-tight', 'font-bold'],
		body1: ['text-xs', 'leading-tight'],
		body2: ['text-[0.688rem]', 'leading-[1.64]']
	};

	const classNames = variants[variant].join(' ');
</script>

<svelte:element this={el} class={classNames}>
	<slot />
</svelte:element>
