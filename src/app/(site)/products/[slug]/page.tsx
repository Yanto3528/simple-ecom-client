import { ProductDetails } from '@/page-components/products/ProductDetails';
import { ProductImageGallery } from '@/page-components/products/ProductImageGallery';
import { fetchProductBySlug } from '@/services/products.service';
import { DynamicPageProps } from '@/types/page.types';

export default async function ProductDetailPage({ params }: DynamicPageProps<{ slug: string }>) {
  const { slug } = await params;

  const product = await fetchProductBySlug(slug);

  return (
    <section>
      <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-8">
        <ProductImageGallery data={product.medias} />
        <ProductDetails data={product} />
      </div>
    </section>
  );
}
