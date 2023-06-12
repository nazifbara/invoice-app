<script lang="ts">
	import Icon from './Icon.svelte';

	import { theme } from '$lib/stores';
</script>

<button class="p-1" on:click={theme.toggle}>
	{#if $theme === 'light'}
		<Icon name="moon" />
	{:else}
		<Icon name="sun" />
	{/if}
</button>
