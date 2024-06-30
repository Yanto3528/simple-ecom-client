import { tv } from '@/lib/tailwind-variant';

export const elementWrapperStyles = tv(
  'border border-input-border text-sm outline-none focus-within:ring-2 transition-all w-full flex items-center justify-between text-left bg-input overflow-x-hidden',
  {
    variants: {
      size: {
        sm: 'h-8',
        md: 'h-10',
        lg: 'h-12',
      },
      colorScheme: {
        primary:
          'focus-within:border-primary focus-within:ring-primary-light radix-state-open:border-primary',
        error:
          'border-danger focus-within:border-danger focus-within:ring-danger-light radix-state-open:border-danger',
      },
      disabled: {
        true: 'bg-gray-100 cursor-not-allowed',
      },
      radius: {
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        full: 'rounded-full',
      },
    },
    defaultVariants: {
      size: 'sm',
      radius: 'md',
      colorScheme: 'primary',
    },
  }
);
