<script lang="ts">
	export let options: { value: string; label: string }[] = [];
	export let label = '';
	export let name = '';
	export let value = options[0].value;
</script>

<label class="flex flex-col gap-3">
	{#if label}
		<span class="text-darkText2 dark:text-lightText2">{label}</span>
	{/if}
	<div
		class={`
		w-full
		relative
		overflow-hidden
		after:block
		after:w-2
		after:h-2
		after:border-l-[0px]
		after:border-l-transparent
		after:border-b-[0px]
		after:border-b-transparent
		after:border-r-[2px]
		after:border-r-primary
		after:border-t-[2px]
		after:border-t-primary
		after:absolute
		after:top-[50%]
		after:-translate-y-1/2
		after:rotate-[135deg]
		after:right-5
		after:content-[""]
	`}
	>
		<select
			{...$$restProps}
			{name}
			bind:value
			class={`
			appearance-none
			bg-white
			text-darkText
			font-bold
			border
			border-lightText2
			px-2
			py-4
			outline-none
			rounded-[0.25rem]
			w-full
			z-50
			focus:border-primary
			dark:text-white
			dark:bg-darkBg2
			dark:border-[#252945]
		`}
		>
			{#each options as option}
				<option value={option.value}>
					{option.label}
				</option>
			{/each}
		</select>
	</div>
</label>
