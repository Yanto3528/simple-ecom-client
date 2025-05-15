import { ProductCard } from '@/components/common/ProductCard';
import { Pagination } from '@/components/ui/Pagination';
import { fetchServerProducts } from '@/services/products.service';
import { SortOrder } from '@/types/api.types';
import { FetchProductSortBy } from '@/types/product.types';

type Props = {
  categoryId: string;
  page: number;
  sortBy?: FetchProductSortBy;
  sortOrder?: SortOrder;
};

export async function CategoryProducts({ categoryId, page, sortBy, sortOrder }: Props) {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  const productResponse = await fetchServerProducts({
    categoryId,
    pageSize: 12,
    page,
    sortBy,
    sortOrder,
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
    <p>No product found for this category</p>
  );
}
