'use client';

import { useMemo } from 'react';

import { Button } from '@/components/ui/Button';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/Sheet';
import { useCartContext } from '@/contexts/cart.context';
import { formatPrice } from '@/utils/number.utils';

import { CartItem } from './CartItem';

export function CartSheet() {
  const items = useCartContext((state) => state.items);
  const isSheetOpen = useCartContext((state) => state.isSheetOpen);
  const onSetCartSheet = useCartContext((state) => state.onSetCartSheet);

  const { totalItems, totalPrice } = useMemo(
    () =>
      items.reduce(
        (accum, item) => ({
          totalItems: accum.totalItems + item.selectedQuantity,
          totalPrice: accum.totalPrice + item.selectedQuantity * item.product.price,
        }),
        {
          totalItems: 0,
          totalPrice: 0,
        } as { totalItems: number; totalPrice: number }
      ),
    [items]
  );

  return (
    <Sheet open={isSheetOpen} onOpenChange={onSetCartSheet}>
      <SheetContent className="sm:max-w-lg p-0">
        <div className="flex-1 overflow-y-auto p-6">
          <SheetHeader>
            <SheetTitle>Your cart</SheetTitle>
          </SheetHeader>
          <div>
            <div className="mt-4 flex flex-col gap-8">
              {items.length > 0 ? (
                items.map((item) => <CartItem key={item.product.id} data={item} />)
              ) : (
                <div>Your cart is empty</div>
              )}
            </div>
          </div>
        </div>
        <div className="p-6 border-t border-border">
          <div className="flex items-center justify-between mb-4">
            <span className="ts-body-sm font-bold">
              Subtotal <span className="font-normal ts-body-xs">({totalItems} items)</span>
            </span>
            <span className="font-bold ts-body-sm">{formatPrice(totalPrice)}</span>
          </div>
          <Button className="w-full">Continue to checkout</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
