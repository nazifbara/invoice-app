<script lang="ts">
	import { icons } from '$lib/utils/constants';

	export let name: keyof typeof icons;
</script>

{@html icons[name]}
