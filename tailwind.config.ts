import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        agrovista: {
          light: '#6fbf73',
          DEFAULT: '#4CAF50', // The main bright green
          dark: '#388E3C',
        }
      },
      // --- NEW: Animation Settings ---
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in-delayed': 'fadeInUp 0.8s ease-out 0.3s forwards', // 0.3s delay
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' }, // Start lower and invisible
          '100%': { opacity: '1', transform: 'translateY(0)' },   // End in place and visible
        },
      },
    },
  },
  plugins: [],
};
export default config;