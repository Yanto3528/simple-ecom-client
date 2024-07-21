'use client';

import { CarouselProvider, type CarouselProps } from './Carousel.context';
import { CarouselContent } from './components/CarouselContent';
import { CarouselDots } from './components/CarouselDots';
import { CarouselItem } from './components/CarouselItem';
import { CarouselPrevNext } from './components/CarouselPrevNext';

export function Carousel(props: CarouselProps) {
  return <CarouselProvider {...props} />;
}

export { CarouselContent, CarouselItem, CarouselPrevNext, CarouselDots };
