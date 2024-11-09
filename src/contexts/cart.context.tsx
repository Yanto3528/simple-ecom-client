'use client';

import { type ReactNode, createContext, useState, useContext } from 'react';

import { createStore, useStore, type StoreApi } from 'zustand';

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
    createStore<CartStore>((set) => ({
      items: [],
      isSheetOpen: false,
      addOrIncrItemToCart: (item, quantity) =>
        set((state) => {
          let shouldAddNewItemToCart = true;

          const updatedItems = state.items.map((cartItem) => {
            if (cartItem.product.id === item.id) {
              shouldAddNewItemToCart = false;

              return {
                ...cartItem,
                selectedQuantity: cartItem.selectedQuantity + quantity,
              };
            }

            return cartItem;
          });

          if (shouldAddNewItemToCart) {
            return {
              isSheetOpen: true,
              items: [
                ...updatedItems,
                {
                  product: item,
                  selectedQuantity: quantity,
                },
              ],
            };
          }

          return {
            isSheetOpen: true,
            items: updatedItems,
          };
        }),
      removeItemFromCart: (id) =>
        set((state) => ({
          ...state,
          items: state.items.filter((item) => item.product.id !== id),
        })),
      decrItemFromCart: (id) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.product.id === id ? { ...item, selectedQuantity: item.selectedQuantity - 1 } : item
          ),
        })),
      onOpenCartSheet: () => set({ isSheetOpen: true }),
      onCloseCartSheet: () => set({ isSheetOpen: false }),
      onSetCartSheet: (isOpen) => set({ isSheetOpen: isOpen }),
    }))
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
