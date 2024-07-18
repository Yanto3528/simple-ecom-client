import { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/lib/utils';

type Props = ComponentPropsWithoutRef<'div'>;

export function CardTitle({ className, children, ...props }: Props) {
  return (
    <div
      className={cn('font-semibold leading-none tracking-tight mb-1 text-base', className)}
      {...props}
    >
      {children}
    </div>
  );
}
