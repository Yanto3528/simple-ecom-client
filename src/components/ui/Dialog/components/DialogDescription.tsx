import { Description, DialogDescriptionProps } from '@radix-ui/react-dialog';

import { cn } from '@/lib/utils';

export function DialogDescription({ className, children, ...props }: DialogDescriptionProps) {
  return (
    <Description className={cn('text-sm text-foreground-subtle', className)} {...props}>
      {children}
    </Description>
  );
}
