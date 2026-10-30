/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        spa: {
          black: "#0A0A0A",
          dark: "#0F0F0F",
          charcoal: "#161616",
          surface: "#1E1E1E",
          surfaceLight: "#282828",
          card: "rgba(24, 24, 24, 0.75)",
          gold: {
            light: "#F7E6A9",
            DEFAULT: "#D4AF37", // Metallic gold from LOGO.png
            hover: "#E3C25A",
            dark: "#9E7B1E",
            deep: "#735711",
            champagne: "#E8D8B0",
          },
          ivory: "#FBF9F5",
          muted: "#9E998E",
          border: "rgba(212, 175, 55, 0.18)",
          borderHover: "rgba(212, 175, 55, 0.45)",
        }
      },
      fontFamily: {
        sans: ['var(--font-primary)', 'Arial', 'sans-serif'],
        serif: ['var(--font-primary)', 'Arial', 'sans-serif'],
        cairo: ['"Cairo"', 'sans-serif'],
        arial: ['Arial', 'Helvetica', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F7E6A9 0%, #D4AF37 50%, #9E7B1E 100%)',
        'gold-gradient-soft': 'linear-gradient(135deg, rgba(247, 230, 169, 0.15) 0%, rgba(212, 175, 55, 0.05) 50%, rgba(158, 123, 30, 0.15) 100%)',
        'dark-radial': 'radial-gradient(circle at 50% 0%, rgba(212, 175, 55, 0.08) 0%, rgba(10, 10, 10, 0) 70%)',
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(212, 175, 55, 0.25)',
        'gold-glow-lg': '0 0 45px rgba(212, 175, 55, 0.35)',
        'dark-card': '0 20px 40px -15px rgba(0, 0, 0, 0.7)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
