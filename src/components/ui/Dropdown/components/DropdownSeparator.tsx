import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { Separator } from '@radix-ui/react-dropdown-menu';

import { cn } from '@/lib/utils';

export const DropdownSeparator = forwardRef<
  ElementRef<typeof Separator>,
  ComponentPropsWithoutRef<typeof Separator>
>(({ className, ...props }, ref) => (
  <Separator ref={ref} className={cn('-mx-1 my-1 h-px bg-border', className)} {...props} />
));

DropdownSeparator.displayName = 'DropdownSeparator';
