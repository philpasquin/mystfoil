//--------------------------------------------------------------------------
// Tailwind site configuration
//--------------------------------------------------------------------------
//
// Use this file to completely define the current sites design system by
// adding and extending to Tailwinds default utility classes.
//

const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    // Here we define the default colors available. If you want to include
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      green: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      pink: colors.pink,
      blue: colors.blue,
      primary: '#1a1a1a;'
    },
    // all default Tailwind colors you should extend the colors instead.
    extend: {
      height: {
			"10v": "10vh",
			"20v": "20vh",
			"30v": "30vh",
			"40v": "40vh",
			"50v": "50vh",
			"60v": "60vh",
			"70v": "70vh",
			"80v": "80vh",
			"90v": "90vh",
			"100v": "100vh",
      },
       width: {
			"10v": "10vw",
			"20v": "20vw",
			"30v": "30vw",
			"40v": "40vw",
			"50v": "50vw",
			"60v": "60vw",
			"70v": "70vw",
			"80v": "80vw",
			"90v": "90vw",
			"100v": "100vw",
      },
      
      fontFamily: {
        mono: [
          // Use a custom mono font for this site by changing 'Anonymous' to the
          // font name you want and uncommenting the following line.
          // 'Anonymous',
          ...defaultTheme.fontFamily.mono,
        ],
        sans: ['Inter var', ...defaultTheme.fontFamily.sans
        ],
        serif: [
          // Use a custom serif font for this site by changing 'Lavigne' to the
          // font name you want and uncommenting the following line.
          // 'Lavigne',
          ...defaultTheme.fontFamily.serif,
        ],
      },
      // Set default transition durations and easing when using the transition utilities.
      transitionDuration: {
        DEFAULT: '300ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ]
}
