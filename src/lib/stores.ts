import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const getInitialTheme = () => {
	if (browser) {
		const storedTheme = localStorage.getItem('theme');
		if (storedTheme) {
			return storedTheme;
		}
		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			return 'dark';
		}
	}
	return 'light';
};

export const theme = (() => {
	const { subscribe, update } = writable<string>(getInitialTheme());

	return {
		subscribe,
		toggle: () =>
			update((currentTheme) => {
				const newTheme = currentTheme === 'light' ? 'dark' : 'light';
				if (browser) {
					localStorage.setItem('theme', newTheme);
				}
				return newTheme;
			})
	};
})();
