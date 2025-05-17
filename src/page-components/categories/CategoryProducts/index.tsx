import { ProductCard } from '@/components/products/ProductCard';
import { Pagination } from '@/components/ui/Pagination';
import { DEFAULT_PRODUCT_PAGE_SIZE } from '@/constants/api.constants';
import { fetchServerProducts } from '@/services/products.service';
import { SortOrder } from '@/types/api.types';
import { FetchProductSortBy } from '@/types/product.types';

type Props = {
  categoryIds: string;
  page: number;
  sortBy?: FetchProductSortBy;
  sortOrder?: SortOrder;
};

export async function CategoryProducts({ categoryIds, page, sortBy, sortOrder }: Props) {
  const productResponse = await fetchServerProducts({
    categoryIds,
    pageSize: DEFAULT_PRODUCT_PAGE_SIZE,
    page,
    sortBy,
    sortOrder,
  });

  const { data: products, currentPage, pageSize, totalItems } = productResponse;

  return products.length > 0 ? (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
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
    <p>No product found for this category</p>
  );
}
