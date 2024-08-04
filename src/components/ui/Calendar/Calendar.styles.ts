import { tv } from '@/lib/tailwind-variant';

export const headerButtonStyles = tv('hover:text-primary transition-all');
export const headerTextStyles = tv('text-center');

export const dateButtonStyles = tv(
  'p-1 flex items-center justify-center transition-all enabled:hover:bg-primary enabled:hover:text-white disabled:cursor-not-allowed rounded-md w-full ts-body-sm',
  {
    variants: {
      selected: {
        true: 'bg-primary text-white',
      },
    },
  }
);

export const dayStyles = tv(
  'w-full aspect-square p-1 rounded-md border border-transparent enabled:hover:border-primary ts-body-xs transition-all text-calendar-foreground',
  {
    variants: {
      inOtherMonth: {
        true: 'text-calendar-foreground-other',
      },
      now: {
        true: 'border border-primary',
      },
      disabled: {
        true: 'text-calendar-foreground-disabled hover:border-transparent cursor-not-allowed',
      },
      selected: {
        true: 'bg-primary text-white enabled:hover:text-white enabled:dark:hover:bg-primary-600',
      },
    },
  }
);
