import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		backgroundImage: {
			'electronics': "url('/img/categories/electronics.png')",
			'accessories': "url('/img/categories/accessories.png')",
			'clothes': "url('/img/categories/clothes.png')",
			'home-garden': "url('/img/categories/home-garden.png')",
			'home-improvement': "url('/img/categories/home-improvement.png')",
			'sports': "url('/img/categories/sports.png')",
		},
		boxShadow: {
			'custom-light': '1px 10px 15px rgba(43, 43, 43, 0.438)',
			'custom-zero': "0 0 20px #fa9a1ca6"
		},
  		fontFamily: {
  			opensans: ['opensans']
  		},
		animation: {
			up_down: "upDown 0.5s infinite ease-out alternate"
		},
		keyframes: {
			upDown: {
				"0%": {
					transform: 'translateX(-50%) translateY(0)'
				},
				"100%": {
					transform: 'translateX(-50%) translateY(-5px)'
				}
			}
		},
  		colors: {
  			orangeClr: '#f08a06',
			lightPeachClr: "rgba(255, 196, 0, 0.151)",
  			lightGray: 'rgb(241, 241, 241)',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
