import { tv } from '@/lib/tailwind-variant';

export const avatarStyles = tv(
  'rounded-full flex items-center justify-center object-cover aspect-square font-medium text-white',
  {
    variants: {
      size: {
        sm: 'w-5 text-xs',
        md: 'w-8 text-base',
        lg: 'w-12 text-2xl',
        xl: 'w-16 text-3xl',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);
