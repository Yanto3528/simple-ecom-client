import { Suspense } from 'react';

import { ScrollToTop } from '@/components/common/ScrollToTop';
import { SelectSort } from '@/components/common/SelectSort';
import { SearchFilters } from '@/page-components/search/SearchFilters';
import { SearchProducts } from '@/page-components/search/SearchProducts';
import { SearchProductsLoading } from '@/page-components/search/SearchProducts/SearchProductsLoading';
import { fetchCategories } from '@/services/categories.service';
import { SortOrder } from '@/types/api.types';
import { FetchProductSortBy } from '@/types/product.types';

type SearchPageProps = {
  searchParams: Promise<{
    q: string;
    page: string;
    minPrice: string;
    maxPrice: string;
    sortBy: FetchProductSortBy;
    sortOrder: SortOrder;
    categoryIds: string;
  }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const {
    page = '1',
    q,
    sortBy = 'createdAt',
    sortOrder = 'desc',
    minPrice = '0',
    maxPrice = '7000',
    categoryIds,
  } = params;

  const suspenseKey = Object.values(params).join('-');

  const categories = await fetchCategories();

  return (
    <div className="pb-10">
      {q && (
        <div className="flex items-center justify-center p-6 pt-0 mb-6">
          <h1 className="text-center ts-heading-sm">Result results for &quot;{q}&quot;</h1>
        </div>
      )}
      <div className="grid grid-cols-12 gap-6 items-start">
        <div className="col-span-3 sticky top-[calc(var(--navbar-height)+20px)]">
          <SearchFilters
            categories={categories}
            minPrice={Number(minPrice)}
            maxPrice={Number(maxPrice)}
          />
        </div>
        <div className="col-span-9">
          <div className="flex items-center justify-end mb-4">
            <SelectSort sortBy={sortBy} sortOrder={sortOrder} />
          </div>
          <Suspense key={suspenseKey} fallback={<SearchProductsLoading />}>
            <SearchProducts
              search={q}
              page={Number(page)}
              sortBy={sortBy}
              sortOrder={sortOrder}
              minPrice={Number(minPrice)}
              maxPrice={Number(maxPrice)}
              categoryIds={categoryIds}
            />
          </Suspense>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
}
