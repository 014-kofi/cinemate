export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            screens: {
                other: { min: '640px', max: '1200px' },
            }
        },
    },
    plugins: [],
}