'use client';

import { forwardRef } from 'react';
import type { ElementRef, ComponentPropsWithoutRef } from 'react';

import { Root, Thumb } from '@radix-ui/react-switch';

import { FormElementProps } from '@/types/form.types';
import { cn } from '@/utils';

import { FormLabel } from '../FormLabel';

export type SwitchProps = ComponentPropsWithoutRef<typeof Root> &
  FormElementProps & {
    textClassName?: string;
  };

export const Switch = forwardRef<ElementRef<typeof Root>, SwitchProps>(
  ({ className, label, labelClassName, children, textClassName, ...props }, ref) => (
    <div>
      {label && <FormLabel className={labelClassName}>{label}</FormLabel>}
      <div className="flex items-center gap-3">
        <Root
          className={cn(
            'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-primary disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-switch-active data-[state=unchecked]:bg-switch',
            className
          )}
          {...props}
          ref={ref}
        >
          <Thumb
            className={cn(
              'pointer-events-none block h-5 w-5 rounded-full bg-switch-thumb shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0'
            )}
          />
        </Root>
        <div className={cn('text-sm', textClassName)}>{children}</div>
      </div>
    </div>
  )
);

Switch.displayName = Root.displayName;
