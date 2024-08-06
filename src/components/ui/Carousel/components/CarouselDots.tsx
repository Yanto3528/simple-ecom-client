'use client';

import { ComponentPropsWithoutRef, forwardRef, useCallback, useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

import { CarouselApi, useCarouselContext } from '../Carousel.context';

type CarouselDotProps = ComponentPropsWithoutRef<'div'>;

export const CarouselDots = forwardRef<HTMLDivElement, CarouselDotProps>(
  ({ className, ...props }, ref) => {
    const { api } = useCarouselContext();

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    const onDotButtonClick = useCallback(
      (index: number) => {
        if (!api) return;
        api.scrollTo(index);
      },
      [api]
    );

    const onInit = useCallback((carouselApi: CarouselApi) => {
      if (!carouselApi) return;

      setScrollSnaps(carouselApi?.scrollSnapList());
    }, []);

    const onSelect = useCallback((carouselApi: CarouselApi) => {
      if (!carouselApi) return;

      setSelectedIndex(carouselApi.selectedScrollSnap());
    }, []);

    useEffect(() => {
      if (!api) return;

      onInit(api);
      onSelect(api);
      api.on('reInit', onInit).on('reInit', onSelect).on('select', onSelect);
    }, [api, onInit, onSelect]);

    return (
      <div ref={ref} className={cn('flex justify-center gap-2 mt-2', className)} {...props}>
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => onDotButtonClick(index)}
            className={cn(
              'rounded-full bg-secondary w-2.5 h-2.5',
              selectedIndex === index && 'bg-primary'
            )}
            aria-label={`Carousel dot ${index + 1}`}
          />
        ))}
      </div>
    );
  }
);
