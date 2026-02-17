/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "electric-blue": "#007AFF",
                "acid-green": "#CCFF00",
                "neon-violet": "#BF00FF",
                "dark-grey": "#121212",
                "pitch-black": "#050505",
                "glass-white": "rgba(255, 255, 255, 0.05)",
                "glass-border": "rgba(255, 255, 255, 0.12)",
            },
            fontFamily: {
                "display": ["Space Grotesk", "sans-serif"],
                "sans": ["Inter", "sans-serif"]
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'float-delayed': 'float 6s ease-in-out 3s infinite',
                'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
                'shimmer': 'shimmer 2s linear infinite',
                'slide-up': 'slideUp 0.5s ease-out',
                'slide-down': 'slideDown 0.3s ease-out',
                'fade-in': 'fadeIn 0.5s ease-out',
                'fade-in-up': 'fadeInUp 0.6s ease-out',
                'scale-in': 'scaleIn 0.3s ease-out',
                'spin-slow': 'spin 3s linear infinite',
                'bounce-subtle': 'bounceSubtle 2s ease-in-out infinite',
                'gradient': 'gradient 6s ease infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                'glow-pulse': {
                    '0%, 100%': { opacity: '1', boxShadow: '0 0 15px rgba(0, 122, 255, 0.3)' },
                    '50%': { opacity: '0.8', boxShadow: '0 0 30px rgba(0, 122, 255, 0.5)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                slideDown: {
                    '0%': { transform: 'translateY(-10px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeInUp: {
                    '0%': { transform: 'translateY(30px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                scaleIn: {
                    '0%': { transform: 'scale(0.9)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
                bounceSubtle: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-4px)' },
                },
                gradient: {
                    '0%, 100%': { backgroundPosition: '0% 50%', backgroundSize: '200% 200%' },
                    '50%': { backgroundPosition: '100% 50%', backgroundSize: '200% 200%' },
                },
            },
        },
    },
    plugins: [],
}
