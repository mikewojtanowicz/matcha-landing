import type { Config } from "tailwindcss";

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary matcha colors
        matcha: {
          50: '#f2f7f1',
          100: '#e4efe2',
          200: '#c8dfc5',
          300: '#98c293',
          400: '#76ab70',
          500: '#598f53',
          600: '#467242',
          700: '#385a37',
          800: '#2f482f',
          900: '#283c28',
        },
        // Updated cream colors to be more off-white
        cream: {
          50: '#fefdfb',
          100: '#fcf9f5',
          200: '#f7f3ea',
          300: '#f2ece0',
          400: '#ede5d5',
          500: '#e8deca',
          600: '#d3c7b2',
          700: '#beb19c',
          800: '#a89b86',
          900: '#938570',
        },
        // Neutral grays with slight warmth
        stone: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
      },
      gradients: {
        'terminal': 'linear-gradient(145deg, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
