import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom Voilà Vélo colors
        "primary-red": "#ec634c",
        "secondary-yellow": "#f0b860",
        "accent-green": "#85ba5d",
        "trust-blue": "#73bfc3",
        "creative-purple": "#c8a5f8",
        "dark-charcoal": "#4d4d4d",
        "light-gray": "#f7f8f7",
        "warm-white": "#ffffff",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        fadeInUp: {
          from: {
            opacity: "0",
            transform: "translateY(30px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        scaleIn: {
          from: {
            opacity: "0",
            transform: "scaleX(0)",
          },
          to: {
            opacity: "1",
            transform: "scaleX(1)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fadeInUp 0.8s ease forwards",
        "scale-in": "scaleIn 0.6s ease forwards",
      },
      fontFamily: {
        sans: ["var(--font-open-sans)", "Arial", "Helvetica", "sans-serif"],
        poppins: ["var(--font-poppins)", "Arial", "Helvetica", "sans-serif"],
      },
      fontSize: {
        h1: "clamp(2.5rem, 5vw, 4rem)",
        h2: "clamp(2rem, 4vw, 3rem)",
        h3: "clamp(1.5rem, 3vw, 2rem)",
        h4: "clamp(1.25rem, 2.5vw, 1.5rem)",
        body: "clamp(1rem, 2vw, 1.125rem)",
        small: "clamp(0.875rem, 1.5vw, 1rem)",
      },
      lineHeight: {
        tight: "1.2",
        normal: "1.5",
        loose: "1.8",
      },
      spacing: {
        xs: "0.5rem",
        sm: "1rem",
        md: "1.5rem",
        lg: "2rem",
        xl: "3rem",
        xxl: "4rem",
        xxxl: "6rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
