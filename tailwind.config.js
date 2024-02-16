/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundSize: {
        "100": "100% 100%",
        "99": "99% 100%",
        "104": "104% 104%",
      },
      backgroundImage: {
        "nav-bg": " background: rgba(255, 255, 255, 0.1)",
        blackShadow:
          "radial-gradient(48.51% 51.68% at 50.39% 55.02%, #00000060 0%, #00000050 23%, #00000040 47%, #00000030 72%, #00000020 0%, #00000003 0%)",
        nuestrasOfertasBg:
          "linear-gradient(306.99deg, rgba(81, 200, 239, 0.04) -13.72%, rgba(122, 245, 122, 0.04) 102.02%)",
        circleGradient:
          "linear-gradient(306.99deg, #51C8EF -13.72%, #7AF57A 102.02%)",
      },
      boxShadow: {
        "elegirnos-box-shadow": "#357D6D 4px 4px",
        "back-to-top": "white 0px 0px 15px 2px",
      },
      fontFamily: {
        georgia: ["georgia", "sans-serif"],
      },
      colors: {
        "white-smoke": "#F3F4F5",
        onxy: "#101010",
        "primary-blue": "#192335",
        "primary-orange": "#CD530F",
        harp: "#E7EFF4",
        "gray_goose": "#CFCFCF",
        "light_blue": "#9BBCD0",
      },
      fontSize: {
        "40": "40px",
        "80": "80px",
        "200": "200px",
        "220": "220px",
      },
      lineHeight: {
        "110": "110%",
        "120": "120%",
        "130": "130%",
        "160": "160%",
      },
    },
  },
  plugins: [],
};
