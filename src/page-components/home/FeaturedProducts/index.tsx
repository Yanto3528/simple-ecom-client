import { ProductCard } from '@/components/common/ProductCard';
import { fetchCollectionBySlug } from '@/services/collections.service';

export async function FeaturedProducts() {
  const collection = await fetchCollectionBySlug('summer-sale');

  return (
    <div className="pb-20">
      <div className="flex flex-col items-center gap-2 mb-10">
        <h2 className="ts-heading-lg">{collection.name}</h2>
        <p className="text-foreground-subtle">{collection.description}</p>
      </div>
      <div className="grid grid-cols-home-grid-products xl:grid-cols-4 gap-4">
        {collection.collectionsProducts.map((collectionProductData) => (
          <ProductCard
            key={collectionProductData.products.id}
            data={collectionProductData.products}
          />
        ))}
      </div>
    </div>
  );
}
