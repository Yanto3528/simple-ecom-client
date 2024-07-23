import { tv } from '@/lib/tailwind-variant';

export const textareaStyles = tv(
  'px-2.5 py-2 w-full h-full outline-none transition-all bg-transparent disabled:cursor-not-allowed placeholder:text-input-placeholder resize-none',
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
