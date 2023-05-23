<script lang="ts">
	import Logo from './Logo.svelte';
	import ThemeSwitcher from './ThemeSwitcher.svelte';
	import Avatar from './Avatar.svelte';
</script>

<header
	class={`
    bg-draft
    flex
    justify-between
    fixed
    w-screen
    lg:w-[6.438rem]
    lg:h-screen
    lg:flex-col
    lg:rounded-r-[1.25rem]
  `}
>
	<Logo />

	<div class="flex gap-6 items-center pr-6 lg:pr-0 lg:pb-6 lg:flex-col">
		<ThemeSwitcher />
		<hr
			class={`
      h-full
      border-l-0
      border-t-0
      border-b-0
      border-r
      border-r-[#494E6E]
      lg:w-full
      lg:border-t
      lg:border-r-0
      lg:border-t-[#494E6E]
    `}
		/>
		<Avatar />
	</div>
</header>
