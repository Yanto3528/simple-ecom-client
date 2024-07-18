import { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/lib/utils';

type Props = ComponentPropsWithoutRef<'div'>;

export function CardFooter({ className, children, ...props }: Props) {
  return (
    <div className={cn('p-4 flex gap-2 [&>*]:flex-1', className)} {...props}>
      {children}
    </div>
  );
}
