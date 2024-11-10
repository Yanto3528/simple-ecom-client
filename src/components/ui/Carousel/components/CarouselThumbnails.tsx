'use client';

import { ComponentPropsWithoutRef, forwardRef, useCallback, useEffect, useState } from 'react';

import { Image } from '@/components/common/Image';
import { cn } from '@/utils';

import { CarouselApi, useCarouselContext } from '../Carousel.context';

type CarouselThumbanilsProps = ComponentPropsWithoutRef<'div'> & {
  thumbnails: string[];
};

export const CarouselThumbnails = forwardRef<HTMLDivElement, CarouselThumbanilsProps>(
  ({ className, thumbnails, ...props }, ref) => {
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
      <div
        ref={ref}
        className={cn('grid grid-cols-carousel-thumbnail gap-2 mt-2', className)}
        {...props}
      >
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => onDotButtonClick(index)}
            aria-label={`Carousel thumbnail ${index + 1}`}
            className={cn(
              'relative border-2 border-border aspect-square rounded-lg overflow-hidden',
              selectedIndex === index && 'border-primary'
            )}
          >
            <Image src={thumbnails[index]} alt={`Carousel thumbnail ${index + 1}`} fill />
          </button>
        ))}
      </div>
    );
  }
);
