import { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/utils';

type DialogHeaderProps = ComponentPropsWithoutRef<'div'>;

export function DialogHeader({ children, className, ...props }: DialogHeaderProps) {
  return (
    <div className={cn('px-6 pt-6 pb-3 last:pb-6 flex items-center gap-2', className)} {...props}>
      {children}
    </div>
  );
}
