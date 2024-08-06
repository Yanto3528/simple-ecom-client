import { HTMLAttributes, forwardRef } from 'react';

import { cn } from '@/lib/utils';

import { useCarouselContext } from '../Carousel.context';

type CarouselContentProps = HTMLAttributes<HTMLDivElement> & {
  wrapperClassName?: string;
};

export const CarouselContent = forwardRef<HTMLDivElement, CarouselContentProps>(
  ({ className, wrapperClassName, ...props }, ref) => {
    const { carouselRef, orientation } = useCarouselContext();

    return (
      <div ref={carouselRef} className={cn('overflow-hidden', wrapperClassName)}>
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
