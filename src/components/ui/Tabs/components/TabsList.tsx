import { ComponentPropsWithoutRef } from 'react';

import { TabsList as BaseTabsList, TabsListProps } from '@radix-ui/react-tabs';

import { cn } from '@/utils';

type Props = ComponentPropsWithoutRef<'div'> & TabsListProps;

export function TabsList({ className, children, ...props }: Props) {
  return (
    <BaseTabsList
      className={cn('flex items-center bg-tabs-list p-1 rounded-md', className)}
      {...props}
    >
      {children}
    </BaseTabsList>
  );
}
