import { tv } from '@/lib/tailwind-variant';

export const paginationItemStyles = tv(
  'flex w-8 h-8 items-center justify-center border border-border disabled:text-gray-300 disabled:cursor-not-allowed transition-all rounded-md enabled:hover:text-primary enabled:hover:border-primary disabled:text-foreground-subtle-light',
  {
    variants: {
      selected: {
        true: 'border-primary bg-primary text-white enabled:hover:text-white',
      },
    },
  }
);
