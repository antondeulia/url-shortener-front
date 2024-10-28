import type { Config } from "tailwindcss"

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}"
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				blue: {
					light: "rgb(0, 160, 219)",
					default: "rgb(0, 147, 255)",
					dark: "rgb(44, 135, 197)"
				},
				gray: {
					light: "rgb(238, 238, 238)",
					bold: "rgb(85, 85, 85)",
					tiny: "rgb(32, 32, 32)"
				}
			},
			boxShadow: {
				default: "box-shadow: 0px 1px 4px 0px rgb(204, 204, 204)"
			}
		}
	},
	plugins: []
}
export default config
