/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				display: ['Cormorant', 'serif']
			},
			textColor: {
				skin: {
					primary: 'var(--color-primary)',
					secondary: 'var(--color-secondary)',
					golden: 'var(--color-golden)'
				}
			},
			backgroundColor: {
				skin: {
					primary: 'var(--color-bg-1)',
					secondary: 'var(--color-bg-2)',
					golden: 'var(--color-golden)'
				}
			},
			fontSize: {
				dynamicText: 'clamp(2.5rem, 8vw, 5rem)'
			}
		}
	},
	plugins: []
};
