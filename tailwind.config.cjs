/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				tdmori: ['Mori Gothic', ...defaultTheme.fontFamily.sans],
        tdfounders: ['Founders Grotesk', ...defaultTheme.fontFamily.sans],
        tdmilligram: ['Milligram', ...defaultTheme.fontFamily.sans],
        tdrebond: ['Rebond Grotesque', ...defaultTheme.fontFamily.sans],
        tdmonument: ['Monument Grotesk', ...defaultTheme.fontFamily.sans],
        tdkern: ['Kern', ...defaultTheme.fontFamily.sans],
			},
      letterSpacing: {
        ultraTight: '-0.2em',
        superTight: '-0.1em',
        tightest: '-0.075em',
        tighter: '-0.05em',
        tight: '-0.025em',
        normal: '0em',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em',
      },
      fontSize: {
        "7xl": "7rem"
      }
		}
	},
	plugins: []
};
