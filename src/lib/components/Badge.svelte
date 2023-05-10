<script lang="ts">
	export let type: string = 'pending';
	let color = {
		paid: 'text-success bg-success2 before:bg-success',
		pending: 'text-warning bg-warning2 before:bg-warning',
		draft:
			'text-draft bg-draft2 before:bg-draft dark:text-lightText2 dark:bg-[rgba(223,_227,_250,_0.06)] dark:before:bg-lightText2'
	}[type];
</script>

<span
	class={`
    flex
    gap-2
    font-bold
    items-center
    justify-center
    p-3
    rounded-md
    before:block
    ${color}
    before:content-[""]
    before:w-2
    before:aspect-square
    before:rounded-full
  `}
>
	{type.charAt(0).toUpperCase() + type.slice(1)}
</span>
