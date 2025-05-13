import { ApiResponse } from '@/types/api.types';
import { CheckoutSession, CreateCheckoutSessionPayload } from '@/types/checkout.types';
import { apiServerClient } from '@/utils/api-server.utils';
import { apiClient } from '@/utils/api.utils';

export const createCheckoutSession = async (payload: CreateCheckoutSessionPayload) => {
  const response = await apiClient.post<ApiResponse<CheckoutSession>>(
    `/checkout-sessions`,
    payload
  );

  return response.data.data;
};

// #region Server only api
export const fetchCheckoutSession = async (id: string) => {
  const response = await apiServerClient.get<ApiResponse<CheckoutSession>>(
    `/checkout-sessions/${id}`
  );

  return response.data.data;
};
// #endregion
