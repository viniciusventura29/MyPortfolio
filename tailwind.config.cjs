/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
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
	plugins: [],
}
