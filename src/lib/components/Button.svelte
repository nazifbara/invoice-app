<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { Action } from 'svelte/action';

	export let variant: 'primary' | 'edit' | 'save' | 'danger' = 'primary';
	export let type: 'button' | 'submit' = 'button';
	export let disabled: boolean = false;
	export let compact = false;
	export let action: Action = () => {};

	const dispatch = createEventDispatcher();

	const handleClick = () => {
		if (!disabled) {
			dispatch('click');
		}
	};

	const getVariantClasses = () => {
		const paddings = compact ? 'py-2 pl-2 pr-4' : 'px-4 py-4 md:px-6';
		const commons = [paddings, 'rounded-full', 'font-bold', 'transition-colors', 'duration-300'];

		const variantClasses = variants[variant];

		return [...commons, ...variantClasses].join(' ');
	};

	const variants: { [key in typeof variant]: string[] } = {
		primary: ['bg-primary', 'text-white', 'hover:bg-primary2'],
		edit: [
			'bg-[#F9FAFE]',
			'text-darkText2',
			'hover:bg-lightText2',
			'dark:bg-[#252945]',
			'dark:text-lightText2',
			'dark:hover:bg-white'
		],
		save: [
			'bg-draft',
			'text-[#888EB0]',
			'hover:bg-darkText',
			'dark:text-lightText2',
			'dark:hover:bg-darkBg2'
		],
		danger: ['bg-danger', 'text-white', 'hover:bg-danger2']
	};
</script>

<button use:action {type} class={getVariantClasses()} {disabled} on:click={handleClick}>
	<slot />
</button>
