import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react';

import { Command as CommandPrimitive } from 'cmdk';

import { cn } from '@/utils';

import { inputIconStyles } from '../../Input/Input.styles';

type CommandInputProps = ComponentPropsWithoutRef<typeof CommandPrimitive.Input> & {
  rightElement?: ReactNode;
  wrapperClassName?: string;
};

export const CommandInput = forwardRef<
  ElementRef<typeof CommandPrimitive.Input>,
  CommandInputProps
>(({ className, rightElement, wrapperClassName, ...props }, ref) => (
  <div
    className={cn('flex items-center border-b border-input-border pl-3 pr-10', wrapperClassName)}
  >
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        'flex h-11 w-full rounded-md bg-transparent py-3 outline-none placeholder:text-input-placeholder disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    />
    {rightElement && <span className={inputIconStyles({ isRight: true })}>{rightElement}</span>}
  </div>
));

CommandInput.displayName = CommandPrimitive.Input.displayName;
