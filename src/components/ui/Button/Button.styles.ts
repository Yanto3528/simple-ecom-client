import { tv } from '@/lib/tailwind-variant';

export const buttonStyles = tv(
  'flex items-center justify-center gap-1 transition-all disabled:opacity-70 disabled:cursor-not-allowed focus:ring border outline-none text-sm font-medium',
  {
    variants: {
      colorScheme: {
        primary: 'bg-primary text-white enabled:hover:bg-primary-dark border-primary',
        secondary:
          'bg-secondary text-secondary-darker enabled:hover:bg-secondary-dark border-secondary',
        danger: 'bg-danger text-white enabled:hover:bg-danger-dark',
      },
      variant: {
        outline: 'bg-transparent',
        text: 'bg-transparent border-transparent text-foreground',
        link: 'bg-transparent border-none enabled:hover:bg-transparent enabled:hover:no-underline underline underline-offset-4 text-foreground',
      },
      size: {
        sm: 'px-4 py-1 h-8 text-xs',
        md: 'px-4 py-2 h-10',
        lg: 'px-6 py-3',
      },
      radius: {
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        full: 'rounded-full',
      },
    },
    defaultVariants: {
      colorScheme: 'primary',
      size: 'md',
      radius: 'md',
    },
    compoundVariants: [
      // Outline variant compound
      {
        variant: 'outline',
        colorScheme: 'primary',
        className: 'border-primary text-primary enabled:hover:bg-primary enabled:hover:text-white',
      },
      {
        variant: 'outline',
        colorScheme: 'secondary',
        className: 'border-secondary text-secondary-darker enabled:hover:bg-secondary',
      },
      {
        variant: 'outline',
        colorScheme: 'danger',
        className: 'border-danger text-danger enabled:hover:bg-danger enabled:hover:text-white',
      },

      // Text variant compound
      {
        variant: 'text',
        colorScheme: 'primary',
        className: 'enabled:hover:bg-primary-light enabled:hover:text-primary',
      },
      {
        variant: 'text',
        colorScheme: 'secondary',
        className: 'enabled:hover:bg-secondary-light enabled:hover:text-secondary-darker',
      },
      {
        variant: 'text',
        colorScheme: 'danger',
        className: 'enabled:hover:bg-danger-light enabled:hover:text-danger',
      },
    ],
  }
);
