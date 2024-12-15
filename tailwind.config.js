/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        mainLinearGradient: "linear-gradient(90deg, #00BD94 0%, #019BA2 100%)",

        greenButtonGradient: "linear-gradient(90deg, #00BD94 0%, #019BA2 100%)",
      },

      colors: {
        sideNavActiveBg: "#BDE0DD",

        dashboardHeaderTextColor: "#45464E",
      },

      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
