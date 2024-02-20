module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        blue_gray: { 100: "#d3d8dc", 400: "#8b8b8b", "100_6c": "#d9d9d96c" },
        gray: {
          50: "#f4f5ff",
          800: "#434343",
          900: "#191919",
          "800_02": "#414141",
          "800_01": "#474747",
        },
        indigo: { 50: "#eaebf3", "50_b0": "#eaebf3b0", "50_01": "#e9eaf2" },
        teal: { 50: "#d9eaf4" },
        black: {
          900: "#000000",
          "900_3f": "#0000003f",
          "900_49": "#00000049",
          "900_26": "#00000026",
        },
        light_blue: { 800: "#0071bc" },
        blue: { 100: "#c9dcf5" },
        white: { A700: "#ffffff" },
      },
      fontFamily: {
        gilroybold: "Gilroy-Bold",
        gilroyregular: "Gilroy-Regular",
        gilroylight: "Gilroy-Light",
        montserrat: "Montserrat",
        gilroymedium: "Gilroy-Medium",
        gilroysemibold: "Gilroy-SemiBold",
      },
      boxShadow: {
        bs3: "0px 0px  25px 0px #0000003f",
        bs2: "0px 3.33px  16px 0px #0000003f",
        bs1: "0px 4.81px  24px 0px #00000049",
        bs: "5.19px 7.78px  17px 0px #00000026",
      },
      backgroundImage: {
        gradient: "linear-gradient(90deg ,#c9dcf5,#d3d8dc)",
        gradient1: "radial-gradient(#d9d9d96c,#d9d9d96c)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
