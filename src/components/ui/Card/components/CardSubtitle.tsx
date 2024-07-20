import { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/lib/utils';

type Props = ComponentPropsWithoutRef<'span'>;

export function CardSubtitle({ className, children, ...props }: Props) {
  return (
    <span className={cn('text-xs text-card-foreground-subtle', className)} {...props}>
      {children}
    </span>
  );
}
