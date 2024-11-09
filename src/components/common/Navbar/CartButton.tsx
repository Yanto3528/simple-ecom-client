'use client';

import { useMemo } from 'react';

import { ShoppingCart } from 'lucide-react';

import { useCartContext } from '@/contexts/cart.context';

export function CartButton() {
  const items = useCartContext((state) => state.items);
  const onOpenCartSheet = useCartContext((state) => state.onOpenCartSheet);

  const totalItem = useMemo(
    () => items.reduce((accum, item) => accum + item.selectedQuantity, 0),
    [items]
  );

  return (
    <button
      type="button"
      onClick={onOpenCartSheet}
      className="ts-body-sm relative"
      aria-label="Shopping cart"
    >
      <ShoppingCart size={16} />
      <div className="w-4 h-4 rounded-full bg-primary text-white text-3xs flex items-center justify-center absolute top-0 right-0 -translate-y-[70%] translate-x-[60%]">
        {totalItem}
      </div>
    </button>
  );
}
