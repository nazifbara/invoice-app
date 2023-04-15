<script lang="ts">
	export let variant = 'primary';

	const commons = [
		'px-6',
		'py-4',
		'rounded-full',
		'font-bold',
		'transition-colors',
		'duration-300'
	];

	const variants: { [key: string]: string[] } = {
		primary: [...commons, 'bg-primary', 'text-white', 'hover:bg-primary2'],
		edit: [
			...commons,
			'bg-[#F9FAFE]',
			'text-darkText2',
			'hover:bg-lightText2',
			'dark:bg-[#252945]',
			'dark:text-lightText2',
			'dark:hover:bg-white'
		],
		save: [
			...commons,
			'bg-draft',
			'text-[#888EB0]',
			'hover:bg-darkText',
			'dark:text-lightText2',
			'dark:hover:bg-darkBg2'
		],
		danger: [...commons, 'bg-danger', 'text-white', 'hover:bg-danger2']
	};

	const classNames = variants[variant].join(' ');
</script>

<button class={classNames}>
	<slot />
</button>
