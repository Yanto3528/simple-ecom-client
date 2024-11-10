import { apiClient } from '@/utils/api.utils';
import { ApiResponse } from '@/types/api.types';
import { Product } from '@/types/product.types';

export const fetchProductBySlug = async (slug: string) => {
  const response = await apiClient<ApiResponse<Product>>(`/products/${slug}`);

  return response.data.data;
};
