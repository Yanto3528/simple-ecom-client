import { Title, DialogTitleProps } from '@radix-ui/react-dialog';

import { cn } from '@/utils';

export function DialogTitle({ children, className, ...props }: DialogTitleProps) {
  return (
    <Title className={cn('font-semibold ts-body-base leading-tight', className)} {...props}>
      {children}
    </Title>
  );
}
