/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		listStyleType: {
			square: 'square',
		},
		extend: {
			colors: {
				background: '#e6e9f2',
				white: '#ffffff',
				primary: '#384564',
				greyText: '#878D9D',
				mainText: '#3A4562',
				cardBg: '#EFF0F5',
				bgEmpolyType: 'rgba(161, 177, 219, 0.317343)',
				bgBenefitsType: 'rgba(255, 207, 0, 0.15);',
			},
		},
	},
	plugins: [],
};
