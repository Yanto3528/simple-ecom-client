'use client';

import * as React from 'react';

import { Root } from '@radix-ui/react-radio-group';

import { cn } from '@/lib/utils';

import { RadioGroupCustom } from './components/RadioGroupCustom';
import { RadioGroupItem } from './components/RadioGroupItem';

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof Root>,
  React.ComponentPropsWithoutRef<typeof Root>
>(({ className, ...props }, ref) => (
  <Root className={cn('grid gap-2', className)} {...props} ref={ref} />
));
RadioGroup.displayName = Root.displayName;

export { RadioGroup, RadioGroupItem, RadioGroupCustom };
