import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: {
                    DEFAULT: "#673de6",
                    dark: "#5025d1",
                    light: "#ebe4ff",
                },
                meteorite: {
                    DEFAULT: "#8c85ff",
                    dark: "#2f1c6a",
                    dark2: "#1F1346",
                    light: "#d5dfff",
                },
                gray: {
                    dark: "#36344d",
                    DEFAULT: "#727586",
                    light: "#f2f3f6",
                    border: "#dadce0",
                },
            },
            fontFamily: {
                sans: ["var(--font-nunito)", "sans-serif"],
                serif: ["var(--font-libre-caslon)", "serif"],
            },
        },
    },
    plugins: [],
};
export default config;
