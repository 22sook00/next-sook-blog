/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  important: true,
  theme: {
    extend: {
      colors: {
        default: "#0f172a",
        deepDark: "#18181c",
        dark: "#282c31",
        grayDark: "#334155",
        light: "#fff",
        hover: "#94a3b81a",
        accentLight: "#dbeafe",
        accent: "#2b96ed",
        accentDark: "#0284c7",
        gray: "#9ca3af",
        grayLight: "#f4f6f8",
        line: "#e5e7eb",
      },
      fontFamily: {
        pretendard: ["var(--font-pretendard)"],
      },
      animation: {
        roll: "roll 24s linear infinite",
        shake: "shake .8s ease infinite",
      },
      keyframes: {
        roll: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        shake: {
          "0%": {
            transform: "'rotate(0deg)'",
          },
          "50%": {
            transform: "rotate(25deg)",
          },

          "100%": {
            transform: "rotate(0deg)",
          },
        },
      },
      screens: {
        sxl: "1180px",
        // @media (min-width: 1180px){...}
        sm: "480px",
        // @media (min-width: 480px){...}
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
