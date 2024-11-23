'use client';

import { type ReactNode, createContext, useState, useContext, useEffect } from 'react';

import { createStore, useStore, type StoreApi } from 'zustand';

import { useGetCurrentUserQuery } from '@/hooks/services/auth.service.hook';
import { User } from '@/types/auth.types';

type AuthModalType = 'login' | 'signup';

type AuthStore = {
  user: User | null;
  isAuthModalOpen: boolean;
  type: AuthModalType;
  isLoading: boolean;
  openAuthModal: (data?: { onSuccess?: (user: User) => void }) => void;
  closeAuthModal: () => void;
  setAuthModal: (isOpen: boolean) => void;
  setType: (type: AuthModalType) => void;
  setUser: (user: User) => void;
  onAuthSuccess?: (user: User) => void;
};

const AuthContext = createContext<StoreApi<AuthStore> | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [store] = useState(() =>
    createStore<AuthStore>((set) => ({
      user: null,
      isAuthModalOpen: false,
      isLoading: true,
      type: 'login',
      openAuthModal: (data) => set({ isAuthModalOpen: true, onAuthSuccess: data?.onSuccess }),
      closeAuthModal: () => set({ isAuthModalOpen: false }),
      setAuthModal: (isOpen) => set({ isAuthModalOpen: isOpen }),
      setType: (type) => set({ type }),
      setUser: (user) => set({ user }),
    }))
  );
  const { data, isPending } = useGetCurrentUserQuery();

  useEffect(() => {
    if (!isPending) {
      store.setState({ user: data });
    }
    store.setState({ isLoading: isPending });
  }, [data, isPending, store]);

  return <AuthContext.Provider value={store}>{children}</AuthContext.Provider>;
};

export const useAuthContext = <U,>(selector: (state: AuthStore) => U): U => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within a AuthProvider');
  }
  return useStore(context, selector);
};
