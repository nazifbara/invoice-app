<script lang="ts">
	import Typography from './Typography.svelte';

	export let labelText = '';
	export let checked = false;
</script>

<label class="wrapper">
	<input bind:checked on:change type="checkbox" />
	<span class="checkmark" />
	<Typography as="span" variant="h4">{labelText}</Typography>
</label>

<style lang="postcss">
	.wrapper {
		@apply grid relative gap-4 items-center grid-cols-[auto_1fr] cursor-pointer;
	}

	.wrapper:hover .checkmark {
		@apply border-primary;
	}

	.wrapper:hover input:checked ~ .checkmark {
		@apply bg-primary;
	}

	.checkmark {
		@apply inline-block border border-lightText2 dark:border-darkBg2 w-6 h-6 rounded-sm bg-lightText2 dark:bg-darkBg2 transition-colors;
	}

	.checkmark::after {
		content: '';
		position: absolute;
		display: none;
		left: calc(0.75rem - 0.1875rem);
		top: calc(45% - 0.375rem);
		width: 0.375rem;
		height: 0.75rem;
		border: solid white;
		border-width: 0 2px 2px 0;
		transform: rotate(45deg);
	}

	input {
		@apply absolute opacity-0 w-0 h-0;
	}

	input:checked ~ .checkmark::after {
		@apply block;
	}

	input:checked ~ .checkmark {
		@apply bg-primary;
	}
</style>
