import { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/utils';

import { HtmlRenderer } from '../../HtmlRenderer';

type Props = ComponentPropsWithoutRef<'div'>;

export function CardDescription({ className, children, ...props }: Props) {
  return (
    <div className={cn('text-sm text-card-foreground-subtle', className)} {...props}>
      {typeof children === 'string' ? <HtmlRenderer preview>{children}</HtmlRenderer> : children}
    </div>
  );
}
