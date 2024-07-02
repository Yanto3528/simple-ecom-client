import { tv } from '@/lib/tailwind-variant';

export const accordionContentStyles = tv(
  'overflow-hidden bg-accordion radix-state-closed:animate-slide-up radix-state-open:animate-slide-down',
  {
    variants: {
      showBorder: {
        true: 'group-last/item:rounded-br-md group-last/item:rounded-bl-md radix-state-closed:animate-slide-up-with-border radix-state-open:animate-slide-down-with-border',
      },
    },
  }
);

export const accordionItemStyles = tv('border border-transparent', {
  variants: {
    showBorder: {
      true: 'group/item border-accordion-border border-b-0 border-t-0 first:border-t first:rounded-tr-md first:rounded-tl-md first:border-t-border last:rounded-bl-md last:rounded-br-md',
    },
  },
});

export const accordionTriggerStyles = tv(
  'group flex w-full border-b border-transparent items-center justify-between py-3 px-4 radix-disabled:bg-accordion-disabled radix-disabled:text-foreground-subtle radix-disabled:cursor-not-allowed bg-accordion',
  {
    variants: {
      showBorder: {
        true: 'border-accordion-border group-first/item:rounded-tr-md group-first/item:rounded-tl-md group-last/item:radix-state-closed:rounded-bl-md group-last/item:radix-state-closed:rounded-br-md',
      },
    },
  }
);
