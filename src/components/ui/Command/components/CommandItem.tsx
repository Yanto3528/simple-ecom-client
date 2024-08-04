import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { CommandItem as Item } from 'cmdk';

import { cn } from '@/lib/utils';

export const CommandItem = forwardRef<
  ElementRef<typeof Item>,
  ComponentPropsWithoutRef<typeof Item>
>(({ className, ...props }, ref) => (
  <Item
    ref={ref}
    className={cn(
      'relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none text-foreground data-[selected=true]:bg-secondary-light data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50',
      className
    )}
    {...props}
  />
));

CommandItem.displayName = Item.displayName;
