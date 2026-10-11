import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          50: "#EAF7F6",
          100: "#D3EFEC",
          400: "#33B3AB",
          500: "#1FA39A",
          600: "#0E8F86",
          700: "#0A6E67",
          900: "#0A3D3A",
        },
        peach: {
          50: "#FBEDE8",
          100: "#F6DBD2",
        },
        sand: {
          50: "#F1EFE3",
          100: "#E6E3D0",
        },
        ink: "#0F2B29",
        mist: "#5B7A77",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      boxShadow: {
        soft: "0 20px 45px -15px rgba(10,61,58,0.18)",
        card: "0 10px 30px -10px rgba(10,61,58,0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
