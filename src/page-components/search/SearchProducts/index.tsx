import { ProductCard } from '@/components/common/ProductCard';
import { Pagination } from '@/components/ui/Pagination';
import { DEFAULT_PRODUCT_PAGE_SIZE } from '@/constants/api.constants';
import { fetchServerProducts } from '@/services/products.service';
import { SortOrder } from '@/types/api.types';
import { FetchProductSortBy } from '@/types/product.types';

type Props = {
  search: string;
  page: number;
  sortBy?: FetchProductSortBy;
  sortOrder?: SortOrder;
  minPrice: number;
  maxPrice: number;
  categoryIds?: string;
};

export async function SearchProducts({
  search,
  page,
  sortBy,
  sortOrder,
  minPrice,
  maxPrice,
  categoryIds,
}: Props) {
  const productResponse = await fetchServerProducts({
    search,
    pageSize: DEFAULT_PRODUCT_PAGE_SIZE,
    page,
    sortBy,
    sortOrder,
    minPrice,
    maxPrice,
    categoryIds,
  });

  const { data: products, currentPage, pageSize, totalItems } = productResponse;

  return products.length > 0 ? (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-common-grid-products gap-4 mb-10">
        {products.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        pageSize={pageSize}
        totalCount={totalItems}
        className="justify-center"
      />
    </div>
  ) : (
    <p className="text-center flex items-center justify-center min-h-44 font-bold">
      No product found for this search or filters
    </p>
  );
}
