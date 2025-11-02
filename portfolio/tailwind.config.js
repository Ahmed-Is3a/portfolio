/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    darkMode: "class",
    extend: {
      colors: {
          "primary": "#3182CE",
          "background-light": "#F7FAFC",
          "background-dark": "#1A202C",
          "text-light-primary": "#1A202C",
          "text-dark-primary": "#F7FAFC",
          "text-light-secondary": "#4A5568",
          "text-dark-secondary": "#A0AEC0",
      },
      fontFamily: {
          "display": ["Manrope", "sans-serif"]
      },
      borderRadius: {
          "DEFAULT": "0.25rem",
          "lg": "0.5rem",
          "xl": "0.75rem",
          "full": "9999px"
      },
    },
  },
  plugins: [],
}

