/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        ink: "#121212",
        graphite: "#1c1c1c",
        fog: "#c8c8c8",
        mute: "#9a9a9a",
        paper: "#d5d5d5",
      },
      fontFamily: {
        sans: [
          "var(--font-poppins)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        display: [
          "var(--font-display-family)",
          "var(--font-poppins)",
          "sans-serif",
        ],
      },
      maxWidth: {
        page: "1680px",
      },
    },
  },
};
