import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
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
        primary: "#5C7F67",

        secondary: "#ECF4E7",

        accent: "#FAE5E5",

        neutral: "#5D5656",

        "base-100": "#E9E7E7",

        info: "#3ABFF8",

        success: "#36D399",

        warning: "#FBBD23",

        error: "#F87272",
      },
      fontFamily: {
        gabriela: "'Hahmlet', serif",
        apple: "'Homemade Apple', cursive",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  daisyui: {
    themes: ["pastel"],
  },
  plugins: [require("tailwindcss-animate"), require("daisyui")],
} satisfies Config;

export default config;
