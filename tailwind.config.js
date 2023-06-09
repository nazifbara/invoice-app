/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		fontFamily: {
			base: ['Spartan', 'sans-serif']
		},
		extend: {
			colors: {
				primary: '#7C5DFA',
				primary2: '#9277FF',
				darkText: '#0C0E16',
				darkText2: '#7E88C3',
				darkText3: '#888EB0',
				darkBg: '#141625',
				darkBg2: '#1E2139',
				darkBg3: '#252945',
				lightBg: '#F8F8FB',
				lightBg2: '#FFF',
				lightText: '#FFF',
				lightText2: '#DFE3FA',
				danger: '#EC5757',
				danger2: '#FF9797',
				success: '#33D69F',
				success2: 'rgba(51, 214, 159, 0.06)',
				warning: '#FF8F00',
				warning2: 'rgba(255, 143, 0, 0.06)',
				draft: '#373B53',
				draft2: 'rgba(55, 59, 83, 0.06)'
			}
		}
	},
	plugins: []
};
