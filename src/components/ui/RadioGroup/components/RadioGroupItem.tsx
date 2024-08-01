'use client';

import * as React from 'react';

import { Item, Indicator } from '@radix-ui/react-radio-group';

import { cn } from '@/lib/utils';
import { FormElementProps } from '@/types/form.types';

import { FormLabel } from '../../FormLabel';

type Props = React.ComponentPropsWithoutRef<typeof Item> &
  FormElementProps & {
    name?: string;
  };

export const RadioGroupItem = React.forwardRef<React.ElementRef<typeof Item>, Props>(
  ({ className, wrapperClassName, id, name, label, labelClassName, ...props }, ref) => (
    <div className={cn('flex items-center gap-2', wrapperClassName)}>
      <Item
        ref={ref}
        className={cn(
          'aspect-square size-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        id={id || name}
        {...props}
      >
        <Indicator className="flex items-center justify-center">
          <div className="size-2.5 rounded-full bg-primary" />
        </Indicator>
      </Item>
      {label && (
        <FormLabel
          className={cn('mb-0 font-normal cursor-pointer', labelClassName)}
          htmlFor={id || name}
        >
          {label}
        </FormLabel>
      )}
    </div>
  )
);
RadioGroupItem.displayName = Item.displayName;
