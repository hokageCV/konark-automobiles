/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            fontFamily: {
                mono: ["Consolas", "Cascadia Code", "Menlo", "ui-monospace", "monospace"],
            },
            colors: {
                baseBG: "#D6DDE7",
                baseText: "#eceef2",

                navBG: "#a96025",
                navText: "#f6f7f9",

                searchBG: "#B9C5D7",
                searchText: "#1a202c",
                searchBorder: "#e2e8f0",

                inputBG: "#97A9C3",
                inputText: "#1a202c",
                btnBG: "#6C7BA4",
                btnText: "#1a202c",

                cardBG: "#959CBF",
                cardText: "#1a202c",
            },
        },
    },
    plugins: [require("daisyui")],
};
