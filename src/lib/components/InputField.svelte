<script lang="ts">
	export let label = '';
	export let name = '';
	export let type = 'text';
	export let disabled = false;
	export let value: string | number = '';
	export let invalid = false;
	export let errorMessage = '';

	const handleInput = (e: any) => {
		if (!e.target) return;
		value = type.match(/^(number|range)$/) ? +e.target.value : e.target.value;
	};

	const commonClass = `
		font-bold
		py-4
		outline-none
	`;

	$: inputClass = `
		${commonClass}
		px-2
		bg-white
		text-darkText
		border
		${invalid ? 'border-danger' : 'border-lightText2 dark:border-[#252945]'}
		rounded-[0.25rem]
		focus:border-primary
		dark:bg-darkBg2
		dark:text-white
		caret-primary
	`;

	$: labelClass = `
	flex
	justify-between
	${invalid ? 'text-danger' : 'text-darkText2 dark:text-lightText2'}
	`;

	const disabledInputClass = `
		${commonClass}
		text-darkText2
		dark:text-lightText2
		bg-transparent
	`;
</script>

<label class="flex flex-col gap-3">
	{#if label}
		<span class={labelClass}>
			<span>{label}</span>
			{#if invalid && errorMessage}
				<span>{errorMessage}</span>
			{/if}
		</span>
	{/if}
	<input
		{...$$restProps}
		{value}
		{disabled}
		{type}
		{name}
		aria-invalid={invalid ? true : undefined}
		on:input={handleInput}
		class={disabled ? disabledInputClass : inputClass}
		step="any"
	/>
</label>

<style>
	:global(.dark) input {
		color-scheme: dark;
	}
</style>
