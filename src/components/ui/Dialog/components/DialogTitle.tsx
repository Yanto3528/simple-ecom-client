import { Title, DialogTitleProps } from '@radix-ui/react-dialog';

import { cn } from '@/lib/utils';

export function DialogTitle({ children, className, ...props }: DialogTitleProps) {
  return (
    <Title className={cn('font-semibold text-base leading-tight', className)} {...props}>
      {children}
    </Title>
  );
}
