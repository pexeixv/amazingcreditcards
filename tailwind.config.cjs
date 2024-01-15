/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        lexend: ['"Lexend Giga Variable"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
