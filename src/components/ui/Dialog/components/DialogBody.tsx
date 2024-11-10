import { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/utils';

type DialogBodyProps = ComponentPropsWithoutRef<'div'>;

export function DialogBody({ children, className, ...props }: DialogBodyProps) {
  return (
    <div className={cn('px-6 py-3 last:pb-6 max-h-[75vh] overflow-y-auto', className)} {...props}>
      {children}
    </div>
  );
}
