/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// Severance / Lumon palette
				lumon: {
					cream: '#E8E4DE',
					paper: '#F5F2ED',
					dark: '#0D1F22',
					green: '#0D5C4B',
					greenLight: '#1A7D68',
					greenDark: '#0A4A3C',
					slate: '#4A5D5E',
					border: '#2D3D3F',
					text: '#1A1A1A',
					textMuted: '#5A5A5A',
					accent: '#C4A052',
				},
				// Legacy colors (keeping for compatibility)
				primaryBlue: "#08678C",
				secondaryBlue: '#074973',
				tertiaryBlue: '#032859',
				quaternaryBlue: '#011C40',
				darkBlue: "#011126",
			},
			fontFamily: {
				mono: ['IBM Plex Mono', 'Courier Prime', 'monospace'],
				sans: ['IBM Plex Sans', 'system-ui', 'sans-serif'],
				display: ['IBM Plex Mono', 'monospace'],
			},
			animation: {
				'cursor-blink': 'blink 1s steps(1) infinite',
				'scan': 'scan 8s linear infinite',
				'typewriter': 'typewriter 2s steps(20) forwards',
			},
			keyframes: {
				blink: {
					'0%, 50%': { opacity: '1' },
					'51%, 100%': { opacity: '0' },
				},
				scan: {
					'0%': { transform: 'translateY(-100%)' },
					'100%': { transform: 'translateY(100vh)' },
				},
				typewriter: {
					'0%': { width: '0' },
					'100%': { width: '100%' },
				},
			},
			letterSpacing: {
				'widest': '0.2em',
				'ultra': '0.3em',
			},
		},
	},
	plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
}
