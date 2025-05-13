import { ApiResponse } from '@/types/api.types';
import { User } from '@/types/auth.types';
import { apiClient } from '@/utils/api.utils';

export const getCurrentUser = async () => {
  const response = await apiClient.get<ApiResponse<User>>('/users/me');

  return response.data.data || null;
};
