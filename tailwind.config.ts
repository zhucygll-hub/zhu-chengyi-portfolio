import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#111315",
          900: "#1b1f23",
          700: "#3b4249",
          500: "#6f7881",
          300: "#b9c0c7"
        },
        mist: {
          50: "#f7f8f8",
          100: "#eef1f2",
          200: "#dfe4e7",
          300: "#c9d1d6"
        },
        accent: {
          500: "#6f8191",
          600: "#546777",
          700: "#405260"
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "ui-sans-serif"]
      },
      boxShadow: {
        lift: "0 8px 18px rgba(17, 19, 21, 0.08)",
        soft: "0 4px 10px rgba(17, 19, 21, 0.06)"
      }
    }
  },
  plugins: []
};

export default config;
