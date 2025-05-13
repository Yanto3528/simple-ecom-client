import { useMutation } from '@tanstack/react-query';

import { createOrder } from '@/services/orders.service';

export function useCreateOrderMutation() {
  const mutation = useMutation({
    mutationFn: createOrder,
  });

  return mutation;
}
