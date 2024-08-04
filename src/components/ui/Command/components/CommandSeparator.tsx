import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { CommandSeparator as Separator } from 'cmdk';

import { cn } from '@/lib/utils';

export const CommandSeparator = forwardRef<
  ElementRef<typeof Separator>,
  ComponentPropsWithoutRef<typeof Separator>
>(({ className, ...props }, ref) => (
  <Separator ref={ref} className={cn('-mx-1 h-px bg-border', className)} {...props} />
));
CommandSeparator.displayName = Separator.displayName;
