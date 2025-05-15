import { Image } from '@/components/common/Image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevNext,
  CarouselThumbnails,
} from '@/components/ui/Carousel';
import { ProductMedia } from '@/types/product.types';

type Props = {
  data: ProductMedia[];
};

export function ProductImageGallery({ data }: Props) {
  const thumbnails = data.map((media) => media.url);

  return (
    <div>
      <Carousel>
        <div className="relative">
          <CarouselContent wrapperClassName="rounded-lg" className="ml-0">
            {data.map((media, index) => (
              <CarouselItem key={index} className="pl-0">
                <div className="overflow-hidden aspect-square relative">
                  <div className="absolute inset-0">
                    <Image
                      src={media.url}
                      alt={`${media.caption}-${index}`}
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
        <CarouselThumbnails thumbnails={thumbnails} />
      </Carousel>
    </div>
  );
}
