import { HTMLAttributes, forwardRef } from 'react';

import { cn } from '@/utils';

import { useCarouselContext } from '../Carousel.context';

export const CarouselItem = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { orientation } = useCarouselContext();

    return (
      <div
        ref={ref}
        role="group"
        aria-roledescription="slide"
        className={cn(
          'min-w-0 shrink-0 grow-0 basis-full',
          orientation === 'horizontal' ? 'pl-4' : 'pt-4',
          className
        )}
        {...props}
      />
    );
  }
);

CarouselItem.displayName = 'CarouselItem';
