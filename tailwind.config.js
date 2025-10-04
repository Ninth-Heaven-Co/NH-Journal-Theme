/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./**/*.hbs', './assets/**/*.js'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Lora', 'serif']
            },
            colors: {
                primary: 'var(--color-primary-text)',
                accent: 'var(--ghost-accent-color)',
                gray: {
                    light: 'var(--color-light-gray)',
                    dark: 'var(--color-darker-gray)'
                }
            },
            container: {
                center: true,
                padding: '1.5rem'
            }
        }
    },
    plugins: []
};
