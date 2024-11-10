import { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/utils';

type Props = ComponentPropsWithoutRef<'div'>;

export function CardDescription({ className, children, ...props }: Props) {
  return (
    <div className={cn('text-sm text-card-foreground-subtle', className)} {...props}>
      {children}
    </div>
  );
}
