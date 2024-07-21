import { tv } from '@/lib/tailwind-variant';

export const toastStyles = tv(
  'border border-border w-full max-w-[365px] p-4 rounded-md flex items-start gap-2 relative -translate-y-full animate-toast-slide-in',
  {
    variants: {
      variant: {
        success: 'bg-success-light text-success border-success',
        error: 'bg-danger-light text-danger border-danger',
        info: 'bg-info-light text-info border-info',
        warning: 'bg-warning-light text-warning border-warning',
      },
    },
  }
);
