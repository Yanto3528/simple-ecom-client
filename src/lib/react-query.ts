import { MutationCache, QueryCache, QueryClient } from '@tanstack/react-query';
import axios from 'axios';
import toast from 'react-hot-toast';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 60 * 1000,
    },
  },
  queryCache: new QueryCache({
    onError: (error) => {
      const errorMessage = axios.isAxiosError(error)
        ? error.response?.data?.error?.message
        : error.message;
      toast.error(errorMessage);
    },
  }),
  mutationCache: new MutationCache({
    onError: (error) => {
      const errorMessage = axios.isAxiosError(error)
        ? error.response?.data?.error?.message
        : error.message;
      toast.error(errorMessage);
    },
  }),
});
