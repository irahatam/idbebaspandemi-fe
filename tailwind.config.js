const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}'
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                theme: {
                    'cactus-green': '#34A853',
                    'sea-foam': '#D7EBE1'
                }
            },
            fontFamily: {
                sans: ['Poppins', ...defaultTheme.fontFamily.sans]
            }
        },
        fontSize: {
            // extended font size
            xs: '.75rem',
            sm: '.875rem',
            tiny: '.875rem',
            base: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '4.5xl': '2.5rem',
            '5xl': '3rem',
            '6xl': '4rem',
            '7xl': '5rem',
            '8xl': '6rem'
        }
    },
    variants: {
        extend: {
            flexDirection: ['responsive', 'odd']
        }
    },
    plugins: []
};
