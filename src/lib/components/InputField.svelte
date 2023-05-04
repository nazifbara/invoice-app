<script lang="ts">
	export let label = '';
	export let name = '';
	export let type = 'text';
</script>

<label class="flex flex-col gap-3">
	{#if label}
		<span class="text-darkText2 dark:text-lightText2">{label}</span>
	{/if}
	<input
		{type}
		{name}
		class="bg-white text-darkText font-bold border border-lightText2 px-5 py-4 outline-none rounded-[0.25rem] focus:border-primary dark:bg-darkBg2 dark:border-[#252945] dark:text-white caret-primary"
	/>
</label>

<style>
	:global(.dark) input {
		color-scheme: dark;
	}
</style>
