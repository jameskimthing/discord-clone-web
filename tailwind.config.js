/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				// Black to gray
				'dark-1': '#1E1F22',
				'dark-2': '#2B2D31',
				'dark-3': '#313338',
				'dark-4': '#414348',

				// White to gray
				'white-1': '#F2F3F5',
				'white-2': '#AFB4BB',
				'white-3': '#474951',

				'blue-1': '#5865F2'
			}
		}
	},
	plugins: []
};
