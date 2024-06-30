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
      white: '#fff',
      black: '#000',
      transparent: 'transparent',
    },
    // fontSize: {
    //   xxs: ['0.625rem', '1rem'],
    //   xs: ['0.75rem', '1rem'],
    //   sm: ['0.875rem', '1.25rem'],
    //   base: ['1rem', '1.5rem'],
    // },
    extend: {
      fontSize: {
        '2xs': '0.625rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
