import { ApiResponse } from '@/types/api.types';
import { Product } from '@/types/product.types';
import { apiClient } from '@/utils/api.utils';

export const fetchProductBySlug = async (slug: string) => {
  const response = await apiClient.get<ApiResponse<Product>>(`/products/${slug}`);

  return response.data.data;
};
