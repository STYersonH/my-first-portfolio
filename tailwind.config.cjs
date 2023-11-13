/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx}"],
	mode: "jit",
	theme: {
		extend: {
			colors: {
				primary: "#171718", //"#050816",
				secondary: "#B1C8E1", //"#aaa6c3",
				tertiary: "#0C2948", //"#151030",
				"black-100": "#17243B",
				"black-200": "#131924",
				"white-100": "#f3f3f3",
			},
			boxShadow: {
				card: "0px 0px 75px -15px #005bc5",
			},
			screens: {
				xs: "450px",
			},
			backgroundImage: {
				//"hero-pattern": "url('/src/assets/herobg.png')",
				"hero-pattern": "url('/src/assets/heroWave.svg')",
				"tech-pattern-up": "url('/src/assets/techWaveUp.svg')",
				"tech-pattern-down": "url('/src/assets/techWaveDown.svg')",
			},
		},
	},
	plugins: [],
};
