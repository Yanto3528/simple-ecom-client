import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { CommandGroup as Group } from 'cmdk';

import { cn } from '@/utils';

export const CommandGroup = forwardRef<
  ElementRef<typeof Group>,
  ComponentPropsWithoutRef<typeof Group>
>(({ className, ...props }, ref) => (
  <Group
    ref={ref}
    className={cn(
      'overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-foreground-subtle',
      className
    )}
    {...props}
  />
));

CommandGroup.displayName = Group.displayName;
