import { useMutation } from '@tanstack/react-query';

import { createCheckoutSession } from '@/services/checkout-sessions.service';

export function useCreateCheckoutSessionMutation() {
  const mutation = useMutation({
    mutationFn: createCheckoutSession,
  });

  return mutation;
}
