import { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/utils';

type Props = ComponentPropsWithoutRef<'div'>;

export function CardBody({ className, children, ...props }: Props) {
  return (
    <div className={cn('p-4 flex-1', className)} {...props}>
      {children}
    </div>
  );
}
