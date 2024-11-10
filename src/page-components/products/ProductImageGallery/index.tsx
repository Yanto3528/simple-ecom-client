import { Image } from '@/components/common/Image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevNext,
  CarouselThumbnails,
} from '@/components/ui/Carousel';

const images = [
  'https://images.unsplash.com/photo-1484788984921-03950022c9ef?q=80&w=3032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1452457750107-cd084dce177d?q=80&w=2901&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

export function ProductImageGallery() {
  return (
    <div>
      <Carousel>
        <div className="relative">
          <CarouselContent wrapperClassName="rounded-lg" className="ml-0">
            {images.map((imageSrc, index) => (
              <CarouselItem key={index} className="pl-0">
                <div className="overflow-hidden aspect-square relative">
                  <div className="absolute inset-0">
                    <Image
                      src={imageSrc}
                      alt={`image-${index}`}
                      fill
                      priority={index === 0}
                      className="object-cover"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevNext position="inside" />
        </div>
        <CarouselThumbnails thumbnails={images} />
      </Carousel>
    </div>
  );
}
