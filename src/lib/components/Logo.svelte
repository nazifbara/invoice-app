<script lang="ts">
	import Icon from './Icon.svelte';
</script>

<div
	class={`
    grid 
    place-content-center 
    w-[4.5rem]
    aspect-square
    bg-primary
    relative
    overflow-hidden
    rounded-r-[1.25rem]
    after:content-[""]
    after:absolute
    after:inset-0
    after:block
    after:bg-primary2
    after:rounded-l-[1.25rem]
    after:translate-y-1/2
    after:z-20
    lg:w-[6.438rem]
  `}
>
	<span class="z-30"><Icon name="logo" /></span>
</div>
