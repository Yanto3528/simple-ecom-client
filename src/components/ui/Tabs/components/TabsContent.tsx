import { ComponentPropsWithoutRef } from 'react';

import { TabsContent as BaseTabsContent, TabsContentProps } from '@radix-ui/react-tabs';

import { cn } from '@/lib/utils';

type Props = ComponentPropsWithoutRef<'div'> & TabsContentProps;

export function TabsContent({ className, children, ...props }: Props) {
  return (
    <BaseTabsContent className={cn('mt-2 ', className)} {...props}>
      {children}
    </BaseTabsContent>
  );
}
