import { tv } from '@/lib/tailwind-variant';

const radiusClasses = {
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full',
};

export const skeletonStyles = tv('relative overflow-hidden w-full h-[1.3em] bg-secondary', {
  variants: {
    radius: radiusClasses,
  },
  defaultVariants: {
    radius: 'md',
  },
});

export const skeletonAnimationStyles = tv(
  'top-0 left-0 right-0 bottom-0 h-full -translate-x-full bg-gradient-skeleton animate-skeleton-shimmer',
  {
    variants: {
      radius: radiusClasses,
    },
    defaultVariants: {
      radius: 'md',
    },
  }
);
