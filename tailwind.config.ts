
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				blue: {
					50: '#f0f7ff',
					100: '#e0f0ff',
					200: '#baddff',
					300: '#84c5ff',
					400: '#3a86ff',
					500: '#0a6def',
					600: '#0053cc',
					700: '#0042a6',
					800: '#003380',
					900: '#002966',
				},
				navy: {
					50: '#f2f5f9',
					100: '#e3eaf2',
					200: '#c2d2e3',
					300: '#95b1ce',
					400: '#6389b3',
					500: '#446b95',
					600: '#345478',
					700: '#2a4460',
					800: '#263952',
					900: '#1d3557',
				},
				purple: {
					50: '#f5f0ff',
					100: '#ede5ff',
					200: '#dccaff',
					300: '#c9a4ff',
					400: '#b169ff',
					500: '#9834ff',
					600: '#7a16d9',
					700: '#6A0DAD',
					800: '#5a0b93',
					900: '#4a0a79',
				},
				orange: {
					50: '#fff8eb',
					100: '#ffecc6',
					200: '#ffd88a',
					300: '#ffbe4d',
					400: '#ff9e23',
					500: '#ff8800',
					600: '#FF6B00',
					700: '#cc5500',
					800: '#a34400',
					900: '#7a3300',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'fade-up': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'fade-up': 'fade-up 0.5s ease-out'
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
			},
			boxShadow: {
				'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
				'card': '0 10px 30px rgba(0, 0, 0, 0.08)',
				'intense': '0 10px 50px rgba(0, 0, 0, 0.12)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
