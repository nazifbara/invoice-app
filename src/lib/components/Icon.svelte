<script lang="ts">
	import { icons } from '$lib/utils/constants';
	import type { IconName } from '$lib/utils/types';

	export let name: IconName;
</script>

{@html icons[name]}
