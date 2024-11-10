import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { CommandEmpty as Empty } from 'cmdk';

import { cn } from '@/utils';

export const CommandEmpty = forwardRef<
  ElementRef<typeof Empty>,
  ComponentPropsWithoutRef<typeof Empty>
>(({ className, ...props }, ref) => (
  <Empty
    ref={ref}
    className={cn('py-4 text-center text-sm text-foreground-subtle', className)}
    {...props}
  />
));

CommandEmpty.displayName = Empty.displayName;
