import { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/lib/utils';

type Props = ComponentPropsWithoutRef<'div'>;

export function CardBody({ className, children, ...props }: Props) {
  return (
    <div className={cn('p-4', className)} {...props}>
      {children}
    </div>
  );
}
