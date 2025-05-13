import { useQuery } from '@tanstack/react-query';

import { CURRENT_USER_QUERY_KEY } from '@/constants/query.constants';
import { getCurrentUser } from '@/services/users.service';

// #region Query
export function useGetCurrentUserQuery() {
  const query = useQuery({
    queryFn: getCurrentUser,
    queryKey: [CURRENT_USER_QUERY_KEY],
  });

  return query;
}
// #endregion
