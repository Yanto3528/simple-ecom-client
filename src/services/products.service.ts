import { ApiResponse } from '@/types/api.types';
import { FetchProductQuery, Product } from '@/types/product.types';
import { apiServerClient } from '@/utils/api-server.utils';
import { apiClient } from '@/utils/api.utils';

export const fetchProductBySlug = async (slug: string) => {
  const response = await apiClient.get<ApiResponse<Product>>(`/products/${slug}`);

  return response.data.data;
};

// #region Server only api
export const fetchServerProducts = async (params?: FetchProductQuery) => {
  const response = await apiServerClient.get<ApiResponse<Product, true>>(`/products`, {
    params,
  });

  return response.data;
};
// #endregion
