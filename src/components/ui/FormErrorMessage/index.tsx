import { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/utils';

export type FormErrorMessageProps = ComponentPropsWithoutRef<'p'>;

export function FormErrorMessage({ children, className, ...props }: FormErrorMessageProps) {
  return (
    <span className={cn('block text-2xs font-medium text-danger', className)} {...props}>
      {children}
    </span>
  );
}
