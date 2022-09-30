/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "src/**/*.{html,js}",
        "dist/**/*.html"
    ],
    theme: {
        extend: {
            colors: {
                primary: '#FF6363',
                secondary: {
                    100: '#E2E2D5',
                    200: '#888883'
                }
            },
            fontFamily: {
                body: ['Nunito']
            }
        },
    },
    plugins: [],
}


//extend: use to add new values, aside from the core ones
//theme: use to overwrite existing core values