import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: {
        DEFAULT: 'var(--primary)',
        light: 'var(--primary-light)',
        dark: 'var(--primary-dark)',
      },
      secondary: {
        DEFAULT: 'var(--secondary)',
        light: 'var(--secondary-light)',
        dark: 'var(--secondary-dark)',
        darker: 'var(--secondary-darker)',
      },
      danger: {
        DEFAULT: 'var(--danger)',
        light: 'var(--danger-light)',
        dark: 'var(--danger-dark)',
      },
      success: {
        DEFAULT: 'var(--success)',
        light: 'var(--success-light)',
        dark: 'var(--success-dark)',
      },
      info: {
        DEFAULT: 'var(--info)',
        light: 'var(--info-light)',
        dark: 'var(--info-dark)',
      },
      warning: {
        DEFAULT: 'var(--warning)',
        light: 'var(--warning-light)',
        dark: 'var(--warning-dark)',
      },
      foreground: {
        DEFAULT: 'var(--foreground)',
        subtle: 'var(--foreground-subtle)',
      },
      background: {
        DEFAULT: 'var(--background)',
      },
      border: {
        DEFAULT: 'var(--border)',
      },
      input: {
        DEFAULT: 'var(--input)',
        border: 'var(--input-border)',
        placeholder: 'var(--input-placeholder)',
        icon: 'var(--input-icon)',
      },
      accordion: {
        DEFAULT: 'var(--accordion)',
        border: 'var(--accordion-border)',
        disabled: 'var(--accordion-disabled)',
      },
      card: {
        DEFAULT: 'var(--card)',
        'border': 'var(--card-border)',
        'foreground': 'var(--card-foreground)',
        'foreground-subtle': 'var(--card-foreground-subtle)'
      },
      white: '#fff',
      black: '#000',
      transparent: 'transparent',
    },
    extend: {
      fontSize: {
        '2xs': '0.625rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        slideDown: {
          '0%': { height: '0', borderBottom: '0px' },
          '100%': {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        slideUp: {
          '0%': {
            height: 'var(--radix-accordion-content-height)',
          },
          '100%': { height: '0', borderBottom: '0px' },
        },
        slideDownWithBorder: {
          '0%': { height: '0', borderBottom: '0px' },
          '100%': {
            height: 'var(--radix-accordion-content-height)',
            borderBottom: `1px solid var(--border)`,
          },
        },
        slideUpWithBorder: {
          '0%': {
            height: 'var(--radix-accordion-content-height)',
            borderBottom: `1px solid var(--border)`,
          },
          '100%': { height: '0', borderBottom: '0px' },
        },
        tooltipFadeIn: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.9)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        tooltipFadeOut: {
          '0%': {
            opacity: '1',
            transform: 'scale(1)',
          },
          '100%': {
            opacity: '0',
            transform: 'scale(0.9)',
          },
        },
        skeletonShimmer: {
          '100%': {
            transform: 'translateX(100%)',
          },
        },
        scaleIn: {
          '0%': {
            transform: 'scale(0)',
          },
          '100%': {
            transform: 'scale(1)',
          },
        },
        scaleOut: {
          '0%': {
            transform: 'scale(1)',
          },
          '100%': {
            transform: 'scale(0)',
          },
        },
      },
      animation: {
        'slide-down': 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards',
        'slide-up': 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards',
        'slide-down-with-border':
          'slideDownWithBorder 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards',
        'slide-up-with-border': 'slideUpWithBorder 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards',
        'tooltip-fade-in': 'tooltipFadeIn 200ms ease-out forwards',
        'tooltip-fade-out': 'tooltipFadeOut 200ms ease-out forwards',
        'scale-in': 'scaleIn 200ms ease-out forwards',
        'scale-out': 'scaleOut 200ms ease-out forwards',
        'skeleton-shimmer': 'skeletonShimmer 1000ms infinite',
      },
    },
  },
  plugins: [require('tailwindcss-radix')()],
};
export default config;
