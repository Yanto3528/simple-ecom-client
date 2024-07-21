import { HTMLAttributes, forwardRef } from 'react';

import { cn } from '@/lib/utils';

import { useCarouselContext } from '../Carousel.context';

export const CarouselContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarouselContext();

    return (
      <div ref={carouselRef} className="overflow-hidden">
        <div
          ref={ref}
          className={cn(
            'flex',
            orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col',
            className
          )}
          {...props}
        />
      </div>
    );
  }
);

CarouselContent.displayName = 'CarouselContent';
