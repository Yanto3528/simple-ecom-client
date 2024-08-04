import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { Command as CommandPrimitive } from 'cmdk';

import { cn } from '@/lib/utils';

export const CommandInput = forwardRef<
  ElementRef<typeof CommandPrimitive.Input>,
  ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div className="flex items-center border-b border-input-border pl-3 pr-10">
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        'flex h-11 w-full rounded-md bg-transparent py-3 outline-none placeholder:text-input-placeholder disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    />
  </div>
));

CommandInput.displayName = CommandPrimitive.Input.displayName;
