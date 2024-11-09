/* eslint-disable no-nested-ternary */
import { ComponentPropsWithoutRef, forwardRef } from 'react';

import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

import { Button } from '../../Button';
import { useCarouselContext } from '../Carousel.context';

type CarouselPrevNextProps = ComponentPropsWithoutRef<'div'> & {
  variant?: 'absolute' | 'static';
  position?: 'outside' | 'inside';
};

export const CarouselPrevNext = forwardRef<HTMLDivElement, CarouselPrevNextProps>(
  ({ className, variant = 'absolute', position, ...props }, ref) => {
    const { orientation, scrollNext, canScrollNext, canScrollPrev, scrollPrev } =
      useCarouselContext();

    const isAbsolute = variant === 'absolute';
    const isStatic = variant === 'static';
    const isHorizontal = orientation === 'horizontal';
    const isOutside = position === 'outside';

    return (
      <div ref={ref} className={cn(isStatic && 'relative flex gap-2', className)} {...props}>
        <Button
          variant="outline"
          colorScheme="secondary"
          className={cn('h-8 w-8 rounded-full p-0 bg-white', isAbsolute && 'absolute', {
            '-left-12 top-1/2 -translate-y-1/2': isAbsolute && isHorizontal && isOutside,
            '-top-12 left-1/2 -translate-x-1/2 rotate-90': isAbsolute && !isHorizontal && isOutside,
            'left-2 top-1/2 -translate-y-1/2': isAbsolute && isHorizontal && !isOutside,
            'top-2 left-1/2 -translate-x-1/2 rotate-90': isAbsolute && !isHorizontal && !isOutside,
          })}
          disabled={!canScrollPrev}
          onClick={scrollPrev}
        >
          <ArrowLeftIcon className="h-4 w-4" />
          <span className="sr-only">Previous slide</span>
        </Button>
        <Button
          variant="outline"
          colorScheme="secondary"
          className={cn('h-8 w-8 rounded-full p-0 bg-white', isAbsolute && 'absolute', {
            '-right-12 top-1/2 -translate-y-1/2': isAbsolute && isHorizontal && isOutside,
            '-bottom-12 left-1/2 -translate-x-1/2 rotate-90':
              isAbsolute && !isHorizontal && isOutside,
            'right-2 top-1/2 -translate-y-1/2': isAbsolute && isHorizontal && !isOutside,
            'bottom-2 left-1/2 -translate-x-1/2 rotate-90':
              isAbsolute && !isHorizontal && !isOutside,
          })}
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
