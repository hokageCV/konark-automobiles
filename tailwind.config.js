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
                base: {
                    50: "#f3f6f8",
                    100: "#e1e8ec",
                    200: "#c6d4db",
                    300: "#9fb4c1",
                    400: "#708da0",
                    500: "#557285",
                    600: "#495f71",
                    700: "#40505e",
                    800: "#3a4550",
                    900: "#343d45",
                    950: "#1d232a",
                },
                horizon: {
                    50: "#f5f7fa",
                    100: "#eaeef4",
                    200: "#cfd9e8",
                    300: "#a6bad3",
                    400: "#7594bb",
                    500: "#5e81ac",
                    600: "#415f88",
                    700: "#364d6e",
                    800: "#2f425d",
                    900: "#2b394f",
                    950: "#1d2534",
                },
            },
        },
    },
    plugins: [require("daisyui")],
};
