<script lang="ts">
	export let el = 'p';
	export let variant = 'body1';

	let headingBase = 'font-bold';

	let variants: { [any: string]: string } = {
		h1: `
      ${headingBase}
      text-xl
      md:leading-[1.88]
      md:text-[2rem]
    `,
		h2: `
      ${headingBase}
      text-xl
      leading-[1.9]
    `,
		h3: `
      ${headingBase}
      text-base
      leading-[1.67]
    `,
		h4: `
      ${headingBase}
      text-xs
      leading-tight
    `,
		body1: `
      text-xs
      leading-tight
    `,
		body2: `
      text-[0.688rem]
      leading-[1.64]
    `
	};
</script>

<svelte:element this={el} class={`${variants[variant]}`}>
	<slot />
</svelte:element>
