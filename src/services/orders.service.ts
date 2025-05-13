import { ApiResponse } from '@/types/api.types';
import { CreateOrderPayload, Order } from '@/types/order.types';
import { apiServerClient } from '@/utils/api-server.utils';
import { apiClient } from '@/utils/api.utils';

export const createOrder = async (payload: CreateOrderPayload) => {
  const response = await apiClient.post<ApiResponse<Order>>(`/orders`, payload);

  return response.data.data;
};

// #region Server only api
export const fetchOrderById = async (id: string) => {
  const response = await apiServerClient.get<ApiResponse<Order>>(`/orders/${id}`);

  return response.data.data;
};
// #endregion
