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
      colors: {
        primaryColor: "#5F2ECF",
        primary700: "#4A24A1",
        bgPrimary: "#E8E0FA",
        textBlack: "#201E1E",
        textHeader: "#0C111D",
        gray700: "#344054",
        gray500: "#667085",
        gray900: "#101828",
      },
    },
  },
  plugins: [],
};
