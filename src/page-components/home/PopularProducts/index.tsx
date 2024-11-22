import { ProductCard } from '@/components/common/ProductCard';
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
          {collection.collectionsProducts.map((collectionProductData) => (
            <CarouselItem
              className="basis-[45%] md:basis-[30%] lg:basis-[25%]"
              key={collectionProductData.products.id}
            >
              <ProductCard data={collectionProductData.products} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
