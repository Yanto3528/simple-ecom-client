'use client';

import { ReactNode } from 'react';

import { AppProgressProvider as ProgressProvider } from '@bprogress/next';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { AuthProvider } from '@/contexts/auth.context';
import { CartProvider } from '@/contexts/cart.context';
import { queryClient } from '@/lib/react-query';

type ProvidersProps = {
  children: ReactNode;
};

export function Providers({ children }: ProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ProgressProvider height="4px" color="#000" options={{ showSpinner: false }} shallowRouting>
          <CartProvider>{children}</CartProvider>
        </ProgressProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </AuthProvider>
    </QueryClientProvider>
  );
}
