import { tv } from '@/lib/tailwind-variant';

export const inputStyles = tv(
  'max-w-10 h-full outline-none transition-all text-center bg-transparent disabled:cursor-not-allowed placeholder:text-input-placeholder',
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

export const inputIconStyles = tv(
  'text-[inherit] flex-1 flex items-center justify-center py-1 px-2',
  {
    variants: {
      size: {
        sm: '[&_svg]:w-4 [&_svg]:h-4',
        md: '[&_svg]:w-5 [&_svg]:h-5',
        lg: '[&_svg]:w-6 [&_svg]:h-6',
      },
    },
    defaultVariants: {
      size: 'sm',
    },
  }
);
