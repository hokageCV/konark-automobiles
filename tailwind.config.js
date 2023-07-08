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
            },
        },
    },
    plugins: [require("daisyui")],
};
