import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scrollY: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(calc(-100% - 1rem))' },
        },
      },
      animation: {
        scrollY: 'scrollY 10s linear infinite',
      },
      colors: {
        primary: "rgb(0, 220, 130)",
        secondary: "rgb(240 242 245)",
        active: "rgb(240,242,245)",
        dark: "rgb(26 31 44)",
        "dark-2": "rgb(14 16 24)",
        muted: "rgb(87 96 118)",
        light: "rgb(240 242 245/1)",
      },
    },
  },
  darkMode: 'class',
  plugins: [
    require('tailwindcss-animated'),
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.group:hover .group-hover\\:animation-paused': {
          animationPlayState: 'paused',
        },
      });
    }),
  ],
} satisfies Config;
