import { tv } from '@/lib/tailwind-variant';

export const inputStyles = tv(
  'px-2.5 w-full h-full outline-none transition-all bg-transparent disabled:cursor-not-allowed placeholder:text-input-placeholder',
  {
    variants: {
      size: {
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-base',
      },
    },
    defaultVariants: {
      size: 'sm',
    },
  }
);

export const inputIconStyles = tv('pl-2.5 text-input-icon flex items-center justify-center', {
  variants: {
    isLeft: {
      true: 'pl-2.5',
    },
    isRight: {
      true: 'pr-2.5',
    },
    size: {
      sm: '[&>svg]:w-4 [&>svg]:h-4',
      md: '[&>svg]:w-5 [&>svg]:h-5',
      lg: '[&>svg]:w-6 [&>svg]:h-6',
    },
  },
  defaultVariants: {
    size: 'sm',
  },
});
