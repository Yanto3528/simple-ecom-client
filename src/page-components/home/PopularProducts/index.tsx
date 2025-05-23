import { ProductCard } from '@/components/products/ProductCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevNext,
} from '@/components/ui/Carousel';
import { fetchCollectionBySlug } from '@/services/collections.service';

export async function PopularProducts() {
  const collection = await fetchCollectionBySlug('fall-sale');

  return (
    <div className="pb-20">
      <Carousel opts={{ slidesToScroll: 3 }}>
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="ts-heading-sm">{collection.name}</h2>
            <p className="text-foreground-subtle">{collection.description}</p>
          </div>
          <CarouselPrevNext variant="static" />
        </div>
        <CarouselContent>
          {collection.products.map((product) => (
            <CarouselItem className="basis-[45%] md:basis-[33.33%]" key={product.id}>
              <ProductCard data={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
