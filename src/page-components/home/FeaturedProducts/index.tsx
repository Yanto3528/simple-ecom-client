import { ProductCard } from '@/components/products/ProductCard';
import { fetchCollectionBySlug } from '@/services/collections.service';

export async function FeaturedProducts() {
  const collection = await fetchCollectionBySlug('summer-sale');

  const products = collection.products.slice(0, 3);

  return (
    <div className="pb-20">
      <div className="flex flex-col items-center gap-2 mb-10">
        <h2 className="ts-heading-lg">{collection.name}</h2>
        <p className="text-foreground-subtle">{collection.description}</p>
      </div>
      <div className="grid grid-cols-3 xl:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
}
