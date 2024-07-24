import { ComponentPropsWithoutRef } from 'react';

import { TabsTrigger as BaseTabsTrigger, TabsTriggerProps } from '@radix-ui/react-tabs';

import { cn } from '@/lib/utils';

type Props = ComponentPropsWithoutRef<'div'> & TabsTriggerProps;

export function TabsTrigger({ className, children, value, ...props }: Props) {
  return (
    <BaseTabsTrigger
      className={cn(
        'flex-1 flex items-center justify-center gap-2 whitespace-nowrap px-3 py-1.5 text-sm font-medium data-[state=active]:bg-tabs-trigger-active data-[state=active]:text-white rounded-md transition-all',
        className
      )}
      value={value}
      {...props}
    >
      {children}
    </BaseTabsTrigger>
  );
}
