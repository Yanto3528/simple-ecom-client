import { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/utils';

type Props = ComponentPropsWithoutRef<'h3'>;

export function CardTitle({ className, children, ...props }: Props) {
  return (
    <h3
      className={cn('font-semibold leading-none tracking-tight mb-1 text-base', className)}
      {...props}
    >
      {children}
    </h3>
  );
}
