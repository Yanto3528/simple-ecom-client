import { apiClient } from '@/utils/api.utils';
import { ApiResponse } from '@/types/api.types';
import { Collection } from '@/types/collection.types';

export const fetchCollectionBySlug = async (slug: string) => {
  const response = await apiClient.get<ApiResponse<Collection>>(`/collections/${slug}`);

  return response.data.data;
};
