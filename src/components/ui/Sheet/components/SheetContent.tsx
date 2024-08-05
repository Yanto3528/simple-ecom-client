import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { Content, Portal, Overlay, Close } from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

import { VariantProps } from '@/lib/tailwind-variant';
import { cn } from '@/lib/utils';

import { sheetStyles } from '../Sheet.styles';

type SheetContentProps = ComponentPropsWithoutRef<typeof Content> &
  VariantProps<typeof sheetStyles>;

export const SheetContent = forwardRef<ElementRef<typeof Content>, SheetContentProps>(
  ({ side = 'right', className, children, ...props }, ref) => (
    <Portal>
      <Overlay className="fixed inset-0 z-50 bg-black/80 data-[state=closed]:animate-fade-out data-[state=open]:animate-fade-in" />
      <Content ref={ref} className={cn(sheetStyles({ side }), className)} {...props}>
        {children}
        <Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Close>
      </Content>
    </Portal>
  )
);
SheetContent.displayName = Content.displayName;
