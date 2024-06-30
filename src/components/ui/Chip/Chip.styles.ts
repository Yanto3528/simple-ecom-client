import { tv } from '@/lib/tailwind-variant';

export const chipStyles = tv(
  'relative flex items-center gap-1 w-fit rounded-md border border-transparent text-white py-0.5 px-1.5 text-xs',
  {
    variants: {
      colorScheme: {
        primary: 'bg-primary',
        secondary: 'bg-secondary text-secondary-darker',
        danger: 'bg-danger',
        success: 'bg-success',
        warning: 'bg-warning',
        info: 'bg-info',
      },
      variant: {
        subtle: 'bg-transparent border-border text-gray-900',
      },
      rounded: {
        true: 'rounded-full',
      },
    },
    defaultVariants: {
      colorScheme: 'primary',
    },
    compoundVariants: [
      {
        colorScheme: 'primary',
        variant: 'subtle',
        className: 'text-primary bg-primary-light border-primary',
      },
      {
        colorScheme: 'secondary',
        variant: 'subtle',
        className: 'text-secondary-darker  bg-secondary-light border-secondary-darker',
      },
      {
        colorScheme: 'danger',
        variant: 'subtle',
        className: 'text-danger bg-danger-light border-danger',
      },
      {
        colorScheme: 'success',
        variant: 'subtle',
        className: 'text-success bg-success-light border-success',
      },
      {
        colorScheme: 'warning',
        variant: 'subtle',
        className: 'text-warning bg-warning-light border-warning',
      },
      {
        colorScheme: 'info',
        variant: 'subtle',
        className: 'text-info bg-info-light border-info',
      },
    ],
  }
);

export const chipCloseStyles = tv('rounded-sm p-0.5 transition-all', {
  variants: {
    colorScheme: {
      primary: 'hover:bg-primary-dark',
      secondary: 'hover:bg-secondary-dark',
      danger: 'hover:bg-danger-dark',
      success: 'hover:bg-success-dark',
      warning: 'hover:bg-warning-dark',
      info: 'hover:bg-info-dark',
    },
    variant: {
      subtle: 'bg-transparent',
    },
  },
  defaultVariants: {
    colorScheme: 'primary',
  },
  compoundVariants: [
    {
      colorScheme: 'primary',
      variant: 'subtle',
      className: 'hover:bg-primary hover:text-white',
    },
    {
      colorScheme: 'secondary',
      variant: 'subtle',
      className: 'hover:bg-secondary-darker hover:text-white',
    },
    {
      colorScheme: 'danger',
      variant: 'subtle',
      className: 'hover:bg-danger hover:text-white',
    },
    {
      colorScheme: 'success',
      variant: 'subtle',
      className: 'hover:bg-success hover:text-white',
    },
    {
      colorScheme: 'warning',
      variant: 'subtle',
      className: 'hover:bg-warning hover:text-white',
    },
    {
      colorScheme: 'info',
      variant: 'subtle',
      className: 'hover:bg-info hover:text-white',
    },
  ],
});
