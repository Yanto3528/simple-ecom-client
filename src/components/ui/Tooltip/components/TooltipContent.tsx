import * as React from 'react';

import { Portal, Content, Arrow } from '@radix-ui/react-tooltip';

import { cn } from '@/utils';

export const TooltipContent = React.forwardRef<
  React.ElementRef<typeof Content>,
  React.ComponentPropsWithoutRef<typeof Content>
>(({ className, children, sideOffset = 4, ...props }, ref) => (
  <Portal>
    <Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        'z-50 rounded-md bg-tooltip px-4 py-3 text-sm text-tooltip-foreground shadow-md animate-tooltip-fade-in data-[state=closed]:animate-tooltip-fade-out max-w-md',
        className
      )}
      {...props}
    >
      {children}
      <Arrow className="fill-tooltip" />
    </Content>
  </Portal>
));

TooltipContent.displayName = Content.displayName;
