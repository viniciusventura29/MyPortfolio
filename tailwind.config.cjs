/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors :{
				primaryBlue: "#08678C",
				secondaryBlue:'#074973',
				tertiaryBlue:'#032859',
				quaternaryBlue:'#011C40',
				darkBlue:"#011126",
			}
		},
	},
	plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
}
