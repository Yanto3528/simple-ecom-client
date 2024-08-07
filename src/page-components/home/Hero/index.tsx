import Image from 'next/image';

import { Button } from '@/components/ui/Button';
import { Carousel, CarouselContent, CarouselDots, CarouselItem } from '@/components/ui/Carousel';
import HeroOneImage from '@/public/images/hero-1.jpg';
import HeroTwoImage from '@/public/images/hero-2.jpg';
import HeroThreeImage from '@/public/images/hero-3.jpg';

const heros = [
  {
    title: 'New Menu',
    subtitle: 'Summer 2024',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni eius cum saepe! Veritatis, quos cupiditate.',
    button: {
      label: 'Order now',
    },
    imageSrc: HeroOneImage,
  },
  {
    title: 'Delicious Desert',
    subtitle: 'Fall 2024',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni eius cum saepe! Veritatis, quos cupiditate.',
    button: {
      label: 'Shop now',
    },
    imageSrc: HeroTwoImage,
  },
  {
    title: 'Healthy menu',
    subtitle: 'healthy',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni eius cum saepe! Veritatis, quos cupiditate.',
    button: {
      label: 'Shop now',
    },
    imageSrc: HeroThreeImage,
  },
];

export function Hero() {
  return (
    <div className="pb-20">
      <Carousel>
        <CarouselContent wrapperClassName="rounded-lg" className="ml-0">
          {heros.map((hero, index) => (
            <CarouselItem key={hero.title} className="pl-0">
              <div className="bg-primary-light p-10 overflow-hidden aspect-[12/6] flex flex-col justify-center items-center text-center relative">
                <div className="absolute inset-0">
                  <Image
                    src={hero.imageSrc}
                    alt={hero.title}
                    fill
                    priority={index === 0}
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-black/50" />
                <div className="max-w-[70%] relative z-[1]">
                  <span className="ts-body-xs text-primary-light uppercase font-medium">
                    {hero.subtitle}
                  </span>
                  <h2 className="mt-1 mb-8 ts-heading-xl uppercase text-white">{hero.title}</h2>
                  <p className="text-white">{hero.description}</p>
                  <Button className="mt-3 min-w-[200px] mx-auto" size="lg">
                    {hero.button.label}
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselDots className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-full" />
      </Carousel>
    </div>
  );
}
