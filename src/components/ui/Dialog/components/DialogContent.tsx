import {
  Portal,
  Overlay,
  Content,
  Close,
  DialogContentProps as BaseDialogContentProps,
} from '@radix-ui/react-dialog';
import { XIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

type DialogContentProps = BaseDialogContentProps & {
  overlayClassName?: string;
  mobileAsBottomSheet?: boolean;
};

export function DialogContent({
  overlayClassName,
  children,
  className,
  mobileAsBottomSheet,
  ...props
}: DialogContentProps) {
  return (
    <Portal>
      <Overlay
        className={cn(
          'fixed inset-0 z-50 bg-black/80 opacity-0 data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out flex items-center overflow-y-auto',
          mobileAsBottomSheet && 'max-sm:items-end',
          overlayClassName
        )}
      >
        <Content
          className={cn(
            'z-50 w-full mx-auto rounded-xl max-w-lg bg-dialog border border-dialog-border shadow-lg data-[state=open]:animate-modal-fade-in data-[state=closed]:animate-modal-fade-out',
            mobileAsBottomSheet &&
              'max-sm:data-[state=open]:animate-modal-bottom-slide-in max-sm:data-[state=closed]:animate-modal-bottom-slide-out max-sm:rounded-bl-none max-sm:rounded-br-none max-sm:max-w-full',
            className
          )}
          {...props}
        >
          {children}
          <Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary data-[state=open]:text-foreground-subtle">
            <XIcon size={16} />
            <span className="sr-only">Close</span>
          </Close>
        </Content>
      </Overlay>
    </Portal>
  );
}
