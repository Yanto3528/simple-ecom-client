import { useMutation } from '@tanstack/react-query';

import { login, logout, signup } from '@/services/auth.service';

// ================= MUTATION ===================

export function useSignupMutation() {
  const mutation = useMutation({
    mutationFn: signup,
  });

  return mutation;
}

export function useLoginMutation() {
  const mutation = useMutation({
    mutationFn: login,
  });

  return mutation;
}

export function useLogoutMutation() {
  const mutation = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      window.location.reload();
    },
  });

  return mutation;
}
