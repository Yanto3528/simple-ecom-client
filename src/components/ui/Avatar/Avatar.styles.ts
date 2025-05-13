import { tv } from '@/lib/tailwind-variant';

export const avatarStyles = tv(
  'rounded-full flex items-center justify-center object-cover aspect-square font-medium text-white',
  {
    variants: {
      size: {
        xs: 'size-5 text-3xs',
        sm: 'size-6 text-2xs',
        md: 'size-8 text-base',
        lg: 'size-12 text-2xl',
        xl: 'size-16 text-3xl',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);
