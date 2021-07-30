module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        animation:{
            // ['motion-safe'],
            wiggle: 'wiggle 1.5s infinite',
            // typing: 'typing 4s steps(16) forwards, caret 1s infinite'
            typing: 'typing 3.5s steps(40, end), blink .75s step-end infinite;'
        },
        keyframes: {
            wiggle: {
                '0%, 100%': {
                    transform: 'scale(1.2) rotate(7deg)',
                },
                '50%': {
                    transform: 'scale(0.8) rotate(-7deg)',
                }
            },
            typing: {
                'from': { width: 0 },
                'to': { width: '100%' },
                // 'to': { width: 16 },
            },
            caret: {
                '50%': { color: 'transparent' }
            },
            blink: {
                'from, to': { borderColor: 'transparent' },
                '50%': { borderColor: 'orange' }
            }
        },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
