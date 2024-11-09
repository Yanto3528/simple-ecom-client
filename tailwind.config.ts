import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/page-components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      screens: {},
    },
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
        'subtle-light': 'var(--foreground-subtle-light)',
      },
      background: {
        DEFAULT: 'var(--background)',
      },
      border: {
        DEFAULT: 'var(--border)',
        dark: 'var(--border-dark)',
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
        border: 'var(--card-border)',
        foreground: 'var(--card-foreground)',
        'foreground-subtle': 'var(--card-foreground-subtle)',
      },
      dialog: {
        DEFAULT: 'var(--dialog)',
        border: 'var(--dialog-border)',
      },
      switch: {
        DEFAULT: 'var(--switch)',
        thumb: 'var(--switch-thumb)',
        active: 'var(--switch-active)',
      },
      tabs: {
        list: 'var(--tabs-list)',
        'trigger-active': 'var(--tabs-trigger-active)',
      },
      tooltip: {
        DEFAULT: 'var(--tooltip)',
        foreground: 'var(--tooltip-foreground)',
      },
      popover: {
        DEFAULT: 'var(--popover)',
        foreground: 'var(--popover-foreground)',
      },
      calendar: {
        foreground: {
          DEFAULT: 'var(--calendar-foreground)',
          other: 'var(--calendar-foreground-other)',
          disabled: 'var(--calendar-foreground-disabled)',
        },
      },
      white: '#fff',
      black: '#000',
      transparent: 'transparent',
    },
    extend: {
      fontSize: {
        '3xs': '0.5rem',
        '2xs': '0.625rem',
      },
      gridTemplateColumns: {
        'home-grid-products': 'repeat(auto-fill, minmax(230px, 1fr))',
        'carousel-thumbnail': 'repeat(auto-fill, minmax(50px, 1fr))',
        'calendar-header': '2rem 1fr 2rem',
      },
      backgroundImage: {
        'gradient-skeleton':
          'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0))',
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
        toastSlideIn: {
          '0%': {
            transform: 'translateY(-100%)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
        fadeIn: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        fadeOut: {
          '0%': {
            opacity: '1',
          },
          '100%': {
            opacity: '0',
          },
        },
        modalFadeIn: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.9)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        modalFadeOut: {
          '0%': {
            opacity: '1',
            transform: 'scale(1)',
            transformOrigin: 'center',
          },
          '100%': {
            opacity: '0',
            transform: 'scale(0.9)',
          },
        },
        modalBottomSlideIn: {
          '0%': {
            transform: 'translateY(100%)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
        modalBottomSlideOut: {
          '0%': {
            transform: 'translateY(0)',
          },
          '100%': {
            transform: 'translateY(100%)',
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
        'toast-slide-in': 'toastSlideIn 300ms forwards',
        'fade-in': 'fadeIn 300ms forwards',
        'fade-out': 'fadeOut 300ms forwards',
        'modal-fade-in': 'modalFadeIn 300ms forwards',
        'modal-fade-out': 'modalFadeOut 300ms forwards',
        'modal-bottom-slide-in': 'modalBottomSlideIn 300ms forwards',
        'modal-bottom-slide-out': 'modalBottomSlideOut 300ms forwards',
      },
    },
  },
  plugins: [
    require('tailwindcss-radix')(),
    require('tailwindcss-animate'),
    require('./text.plugin'),
  ],
};
export default config;
