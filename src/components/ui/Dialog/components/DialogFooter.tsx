import { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/utils';

type DialogFooterProps = ComponentPropsWithoutRef<'div'>;

export function DialogFooter({ children, className, ...props }: DialogFooterProps) {
  return (
    <div className={cn('px-6 pb-6 pt-3 flex gap-4 justify-end', className)} {...props}>
      {children}
    </div>
  );
}
