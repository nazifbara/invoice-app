<script lang="ts">
	export let label = '';
	export let name = '';
	export let type = 'text';
	export let disabled = false;
	export let value = '';

	let commonClass = `
		font-bold
		py-4
		outline-none
	`;

	let inputClass = `
		${commonClass}
		px-5
		bg-white
		text-darkText
		border
		border-lightText2
		rounded-[0.25rem]
		focus:border-primary
		dark:bg-darkBg2
		dark:border-[#252945]
		dark:text-white
		caret-primary
	`;

	let disabledInputClass = `
		${commonClass}
		text-darkText2
		dark:text-lightText2
		bg-transparent
	`;
</script>

<label class="flex flex-col gap-3">
	{#if label}
		<span class="text-darkText2 dark:text-lightText2">{label}</span>
	{/if}
	<input {value} {disabled} {type} {name} class={disabled ? disabledInputClass : inputClass} />
</label>

<style>
	:global(.dark) input {
		color-scheme: dark;
	}
</style>
