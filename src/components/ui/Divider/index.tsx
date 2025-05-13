import { ComponentPropsWithRef } from 'react';

import { cn } from '@/utils';

type DividerProps = ComponentPropsWithRef<'hr'>;

export function Divider({ className, ...props }: DividerProps) {
  return <hr className={cn('w-full h-[1px] text-border my-4', className)} {...props} />;
}
