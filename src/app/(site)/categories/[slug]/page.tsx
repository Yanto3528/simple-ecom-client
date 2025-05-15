import { Suspense } from 'react';

import { ScrollToTop } from '@/components/common/ScrollToTop';
import { SelectSort } from '@/components/common/SelectSort';
import { CategoryProducts } from '@/page-components/categories/CategoryProducts';
import { CategoryProductsLoading } from '@/page-components/categories/CategoryProducts/CategoryProductsLoading';
import { fetchCategoryBySlug } from '@/services/categories.service';
import { SortOrder } from '@/types/api.types';
import { DynamicPageProps } from '@/types/page.types';
import { FetchProductSortBy } from '@/types/product.types';

type PageQueryProps = {
  page: string;
  sortBy: FetchProductSortBy;
  sortOrder: SortOrder;
};

export default async function ProductDetailPage({
  params,
  searchParams,
}: DynamicPageProps<{ slug: string }, PageQueryProps>) {
  const { slug } = await params;
  const searchQuery = await searchParams;
  const { page, sortBy = 'name', sortOrder = 'asc' } = searchQuery || {};

  const category = await fetchCategoryBySlug(slug);

  return (
    <section className="pb-20">
      <div className="mb-10 text-center">
        <h1 className="mb-1">{category.name}</h1>
        <p>{category.description}</p>
      </div>
      <div className="flex items-center justify-end mb-4">
        <SelectSort sortBy={sortBy} sortOrder={sortOrder} />
      </div>
      <Suspense key={`${page}-${sortBy}-${sortOrder}`} fallback={<CategoryProductsLoading />}>
        <CategoryProducts
          categoryId={category.id}
          page={Number(page ?? 1)}
          sortBy={sortBy}
          sortOrder={sortOrder}
        />
      </Suspense>
      <ScrollToTop />
    </section>
  );
}
