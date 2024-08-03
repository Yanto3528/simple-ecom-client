import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { Content, Portal } from '@radix-ui/react-dropdown-menu';

import { cn } from '@/lib/utils';

export const DropdownContent = forwardRef<
  ElementRef<typeof Content>,
  ComponentPropsWithoutRef<typeof Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <Portal>
    <Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        'z-50 min-w-[14rem] overflow-hidden rounded-md border border-border bg-tooltip p-1 text-tooltip-foreground shadow-md data-[state=open]:animate-tooltip-fade-in data-[state=closed]:animate-tooltip-fade-out',
        className
      )}
      {...props}
    />
  </Portal>
));

DropdownContent.displayName = 'DropdownContent';
