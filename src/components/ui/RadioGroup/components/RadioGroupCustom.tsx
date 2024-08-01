'use client';

import * as React from 'react';

import { Item } from '@radix-ui/react-radio-group';

import { cn } from '@/lib/utils';

type Props = React.ComponentPropsWithoutRef<typeof Item> & {
  name?: string;
  wrapperClassName?: string;
};

export const RadioGroupCustom = React.forwardRef<React.ElementRef<typeof Item>, Props>(
  ({ className, children, wrapperClassName, id, name, ...props }, ref) => (
    <div className={wrapperClassName}>
      <Item
        ref={ref}
        className={cn(
          'disabled:cursor-not-allowed disabled:opacity-50 text-left group/radio',
          className
        )}
        id={id || name}
        {...props}
      >
        {children}
      </Item>
    </div>
  )
);
RadioGroupCustom.displayName = 'RadioGroupCustom';
