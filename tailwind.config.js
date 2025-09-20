/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Army color scheme - Military inspired palette
        army: {
          50: '#f4f5f0',   // Very light olive
          100: '#e8ebdc',  // Light olive gray
          200: '#d1d6b8',  // Light khaki
          300: '#b4bc8f',  // Sage green
          400: '#9ca56a',  // Olive drab light
          500: '#7a8450',  // Olive drab
          600: '#6b7544',  // Dark olive
          700: '#5a6139',  // Forest green
          800: '#4a502f',  // Dark forest
          900: '#3d4228',  // Very dark olive
          950: '#2a2d1a',  // Almost black olive
        },
        earth: {
          50: '#faf9f7',   // Light cream
          100: '#f2f0eb',  // Cream
          200: '#e6e2d7',  // Light tan
          300: '#d2cbb7',  // Tan
          400: '#b8a887',  // Sandy brown
          500: '#a08862',  // Brown
          600: '#8b7355',  // Dark brown
          700: '#735f47',  // Darker brown
          800: '#5f4f3d',  // Dark earth
          900: '#4f4234',  // Very dark brown
          950: '#2b231c',  // Almost black brown
        },
        sage: {
          50: '#f6f7f4',   // Very light sage
          100: '#eceee7',  // Light sage
          200: '#d9dccf',  // Sage gray
          300: '#bdc4ae',  // Medium sage
          400: '#9ca688',  // Sage green
          500: '#7f8a6b',  // Dark sage
          600: '#667055',  // Darker sage
          700: '#525a46',  // Forest sage
          800: '#444a3b',  // Dark forest sage
          900: '#3a3f32',  // Very dark sage
          950: '#1f2219',  // Almost black sage
        },
        // Keep primary as army green for compatibility
        primary: {
          50: '#f4f5f0',
          100: '#e8ebdc',
          200: '#d1d6b8',
          300: '#b4bc8f',
          400: '#9ca56a',
          500: '#7a8450',
          600: '#6b7544',
          700: '#5a6139',
          800: '#4a502f',
          900: '#3d4228',
          950: '#2a2d1a',
        },
        secondary: {
          50: '#faf9f7',
          100: '#f2f0eb',
          200: '#e6e2d7',
          300: '#d2cbb7',
          400: '#b8a887',
          500: '#a08862',
          600: '#8b7355',
          700: '#735f47',
          800: '#5f4f3d',
          900: '#4f4234',
          950: '#2b231c',
        },
        accent: {
          50: '#f6f7f4',
          100: '#eceee7',
          200: '#d9dccf',
          300: '#bdc4ae',
          400: '#9ca688',
          500: '#7f8a6b',
          600: '#667055',
          700: '#525a46',
          800: '#444a3b',
          900: '#3a3f32',
          950: '#1f2219',
        }
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Fira Sans',
          'Droid Sans',
          'Helvetica Neue',
          'sans-serif',
        ],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

