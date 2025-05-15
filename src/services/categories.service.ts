import { ApiResponse } from '@/types/api.types';
import { Category } from '@/types/category.types';
import { apiServerClient } from '@/utils/api-server.utils';

export const fetchCategories = async () => {
  const response = await apiServerClient.get<ApiResponse<Category[]>>(`/categories`);

  return response.data.data;
};

export const fetchCategoryBySlug = async (slug: string) => {
  const response = await apiServerClient.get<ApiResponse<Category>>(`/categories/${slug}`);

  return response.data.data;
};
