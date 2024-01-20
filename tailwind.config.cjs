/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        "lexend-giga": [
          '"Lexend Giga Variable"',
          ...defaultTheme.fontFamily.sans,
        ],
        lexend: ['"Lexend Variable"', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        "b-2": "0 0.25rem 0 black;",
        "b-4": "0 0.5rem 0 black;",
        "b-6": "0 0.75rem 0 black;",
        "b-8": "0 1rem 0 black;",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
