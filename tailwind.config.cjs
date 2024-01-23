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
        "b-1": "0 0.125rem 0 black;",
        "b-2": "0 0.25rem 0 black;",
        "b-3": "0 0.375rem 0 black;",
        "b-4": "0 0.5rem 0 black;",
        "b-5": "0 0.625rem 0 black;",
        "b-6": "0 0.75rem 0 black;",
        "b-7": "0 0.875rem 0 black;",
        "b-8": "0 1rem 0 black;",
      },
      borderWidth: {
        3: "3px",
        6: "6px",
        7: "7px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
