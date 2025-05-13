import { ApiResponse } from '@/types/api.types';
import { LoginPayload, SignupPayload, User } from '@/types/auth.types';
import { apiClient } from '@/utils/api.utils';

export const signup = async (payload: SignupPayload) => {
  const response = await apiClient.post<ApiResponse<User>>('/auth/signup', payload);

  return response.data.data;
};

export const login = async (payload: LoginPayload) => {
  const response = await apiClient.post<ApiResponse<User>>('/auth/signin', payload);

  return response.data.data;
};

export const logout = async () => {
  const response = await apiClient.delete<ApiResponse<null>>('/auth/logout');

  return response.data.data;
};
