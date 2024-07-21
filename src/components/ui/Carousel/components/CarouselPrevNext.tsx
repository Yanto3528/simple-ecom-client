/* eslint-disable no-nested-ternary */
import { ComponentPropsWithoutRef, forwardRef } from 'react';

import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

import { Button } from '../../Button';
import { useCarouselContext } from '../Carousel.context';

type CarouselPrevNextProps = ComponentPropsWithoutRef<'div'> & {
  position?: 'absolute' | 'static';
};

export const CarouselPrevNext = forwardRef<HTMLDivElement, CarouselPrevNextProps>(
  ({ className, position = 'absolute', ...props }, ref) => {
    const { orientation, scrollNext, canScrollNext, canScrollPrev, scrollPrev } =
      useCarouselContext();

    const isAbsolute = position === 'absolute';
    const isStatic = position === 'static';
    const isHorizontal = orientation === 'horizontal';

    return (
      <div ref={ref} className={cn(isStatic && 'relative flex gap-2', className)} {...props}>
        <Button
          variant="outline"
          colorScheme="secondary"
          className={cn(
            'h-8 w-8 rounded-full p-0',
            isAbsolute && 'absolute',
            isAbsolute
              ? isHorizontal
                ? '-left-12 top-1/2 -translate-y-1/2'
                : '-top-12 left-1/2 -translate-x-1/2 rotate-90'
              : ''
          )}
          disabled={!canScrollPrev}
          onClick={scrollPrev}
        >
          <ArrowLeftIcon className="h-4 w-4" />
          <span className="sr-only">Previous slide</span>
        </Button>
        <Button
          variant="outline"
          colorScheme="secondary"
          className={cn(
            'h-8 w-8 rounded-full p-0',
            isAbsolute && 'absolute',
            isAbsolute
              ? isHorizontal
                ? '-right-12 top-1/2 -translate-y-1/2'
                : '-bottom-12 left-1/2 -translate-x-1/2 rotate-90'
              : ''
          )}
          disabled={!canScrollNext}
          onClick={scrollNext}
        >
          <ArrowRightIcon className="h-4 w-4" />
          <span className="sr-only">Next slide</span>
        </Button>
      </div>
    );
  }
);
CarouselPrevNext.displayName = 'CarouselPrevNext';
