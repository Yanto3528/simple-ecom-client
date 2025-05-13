'use client';

import { type ReactNode, createContext, useState, useContext } from 'react';

import { useStore, type StoreApi } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { createStore } from 'zustand/vanilla';

import { CartItemData, Product } from '@/types/product.types';

type CartStore = {
  items: CartItemData[];
  isSheetOpen: boolean;
  addOrIncrItemToCart: (item: Product, quantity: number) => void;
  decrItemFromCart: (id: Product['id']) => void;
  removeItemFromCart: (id: Product['id']) => void;
  onOpenCartSheet: () => void;
  onSetCartSheet: (isOpen: boolean) => void;
  onCloseCartSheet: () => void;
};

const CartContext = createContext<StoreApi<CartStore> | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [store] = useState(() =>
    createStore<CartStore>()(
      persist(
        immer((set) => ({
          items: [],
          isSheetOpen: false,
          addOrIncrItemToCart: (item, quantity) =>
            set((state) => {
              let shouldAddNewItemToCart = true;
              const existingItem = state.items.find((cartItem) => {
                if (cartItem.product.id === item.id) {
                  shouldAddNewItemToCart = false;
                  return true;
                }

                return false;
              });
              if (existingItem) {
                existingItem.selectedQuantity += quantity;
              }

              if (shouldAddNewItemToCart) {
                state.isSheetOpen = true;
                state.items.push({ product: item, selectedQuantity: quantity });
              }
            }),
          removeItemFromCart: (id) =>
            set((state) => {
              state.items = state.items.filter((item) => item.product.id !== id);
            }),
          decrItemFromCart: (id) =>
            set((state) => {
              const item = state.items.find((cartItem) => cartItem.product.id === id);
              if (item) {
                item.selectedQuantity -= 1;
              }
            }),
          onOpenCartSheet: () => set({ isSheetOpen: true }),
          onCloseCartSheet: () => set({ isSheetOpen: false }),
          onSetCartSheet: (isOpen) => set({ isSheetOpen: isOpen }),
        })),
        { name: 'cart' }
      )
    )
  );

  return <CartContext.Provider value={store}>{children}</CartContext.Provider>;
};

export const useCartContext = <U,>(selector: (state: CartStore) => U): U => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCartContext must be used within a CartProvider');
  }
  return useStore(context, selector);
};
