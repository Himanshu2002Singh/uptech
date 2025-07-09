/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        'float-reverse': 'float-reverse 6s ease-in-out infinite',
        'ping': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        zoomTyping: 'zoomTyping 3.5s ease forwards',
        zoomOutward: 'zoomOutward 3.5s ease-in-out forwards', // ✅ New animation added here
      },

      keyframes: {
        zoomTyping: {
          '0%': { transform: 'scale(0.1)', width: '0ch', opacity: '0' },
          '20%': { width: '5ch', opacity: '1' },
          '40%': { width: '10ch' },
          '60%': { width: '15ch' },
          '80%': { width: '18ch' },
          '100%': { transform: 'scale(5)', width: '0ch', opacity: '0', borderColor: 'transparent' },
        },
        'slide-in-from-bottom': {
          '0%': {
            transform: 'translateY(100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px) rotate(0deg)',
          },
          '50%': {
            transform: 'translateY(-20px) rotate(5deg)',
          },
        },
        'float-reverse': {
          '0%, 100%': {
            transform: 'translateY(-10px) rotate(0deg)',
          },
          '50%': {
            transform: 'translateY(10px) rotate(-5deg)',
          },
        },

        // ✅ New keyframe for logo zoom
        zoomOutward: {
          '0%': { transform: 'scale(0.5)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'scale(1.8)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
