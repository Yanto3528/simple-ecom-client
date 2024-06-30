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
      foreground: {
        DEFAULT: 'var(--foreground)',
        subtle: 'var(--foreground-subtle)',
      },
      btn: {
        primary: {
          DEFAULT: 'var(--btn-primary)',
          text: 'var(--btn-primary-text)',
          hover: 'var(--btn-primary-hover)',
        },
        secondary: {
          DEFAULT: 'var(--btn-secondary)',
          text: 'var(--btn-secondary-text)',
          hover: 'var(--btn-secondary-hover)',
        },
        danger: {
          DEFAULT: 'var(--btn-danger)',
          text: 'var(--btn-danger-text)',
          hover: 'var(--btn-danger-hover)',
        },
      },
      white: '#fff',
      black: '#000',
      transparent: 'transparent',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
