import { useMutation, useQuery } from '@tanstack/react-query';

import { CURRENT_USER_QUERY_KEY } from '@/constants/query.constants';
import { getCurrentUser, login, logout, signup } from '@/services/auth.service';

// ================= QUERY ===================
export function useGetCurrentUserQuery() {
  const query = useQuery({
    queryFn: getCurrentUser,
    queryKey: [CURRENT_USER_QUERY_KEY],
  });

  return query;
}

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
