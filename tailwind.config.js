/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            screens: {
                xs: "320px",
                sm: "400px",
                sl: "520px",
                md: "660px",
                ml: "768px",
                ls: "900px",
            },
            colors: {
                cPrimary: "#0b935b",
                cGray: "#f5f6f8",
                cSecondary: {
                    100: "#e2e2d5",
                    200: "#888883",
                },
            },
        },
    },
    plugins: [],
};
