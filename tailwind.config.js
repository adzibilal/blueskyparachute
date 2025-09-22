/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Blue Sky Parachute color scheme - Blue primary with maroon accent
        primary: {
          50: '#f0fdff',   // Very light cyan
          100: '#e0faff',  // Light cyan
          200: '#b8f4ff',  // Medium light cyan
          300: '#7eebff',  // Light cyan
          400: '#3ddcff',  // Medium cyan
          500: '#00C9FF',  // Primary cyan blue
          600: '#00b3e6',  // Darker cyan
          700: '#0099cc',  // Dark cyan
          800: '#007aa3',  // Medium dark cyan
          900: '#005c7a',  // Dark cyan
          950: '#003d52',  // Darkest cyan
        },
        accent: {
          50: '#ffe6e6',   // Very light maroon
          100: '#ffcccc',  // Light maroon
          200: '#ff9999',  // Medium light maroon
          300: '#ff6666',  // Light maroon
          400: '#ff3333',  // Medium maroon
          500: '#5B0300',  // Primary maroon (from image)
          600: '#4d0200',  // Darker maroon
          700: '#3f0200',  // Dark maroon
          800: '#310100',  // Very dark maroon
          900: '#230100',  // Almost black maroon
          950: '#150000',  // Darkest maroon
        },
        secondary: {
          50: '#ffffff',   // Pure white
          100: '#f8f9fa',  // Off white
          200: '#e9ecef',  // Light gray
          300: '#dee2e6',  // Medium light gray
          400: '#ced4da',  // Medium gray
          500: '#adb5bd',  // Gray
          600: '#6c757d',  // Dark gray
          700: '#495057',  // Darker gray
          800: '#343a40',  // Very dark gray
          900: '#212529',  // Almost black
          950: '#0D0D0D',  // Black (from image)
        },
        // Keep compatibility aliases
        blue: {
          50: '#e6f0ff',
          100: '#cce1ff',
          200: '#99c3ff',
          300: '#66a5ff',
          400: '#3387ff',
          500: '#00349C',
          600: '#002d87',
          700: '#002672',
          800: '#001f5d',
          900: '#001848',
          950: '#001133',
        },
        maroon: {
          50: '#ffe6e6',
          100: '#ffcccc',
          200: '#ff9999',
          300: '#ff6666',
          400: '#ff3333',
          500: '#5B0300',
          600: '#4d0200',
          700: '#3f0200',
          800: '#310100',
          900: '#230100',
          950: '#150000',
        }
      },
      fontFamily: {
        sans: [
          'Open Sans',
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
      aspectRatio: {
        '21/9': '21 / 9',
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

