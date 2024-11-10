import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react';

import { Item } from '@radix-ui/react-dropdown-menu';

import { cn } from '@/utils';

type Props = ComponentPropsWithoutRef<typeof Item> & {
  inset?: boolean;
  leftElement?: ReactNode;
};

export const DropdownItem = forwardRef<ElementRef<typeof Item>, Props>(
  ({ className, inset, leftElement, children, ...props }, ref) => (
    <Item
      ref={ref}
      className={cn(
        'relative flex cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-secondary-light data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 [&>svg]:w-4 [&>svg]:h-4',
        inset && 'pl-8',
        className
      )}
      {...props}
    >
      {leftElement && leftElement}
      {children}
    </Item>
  )
);

DropdownItem.displayName = 'DropdownItem';
