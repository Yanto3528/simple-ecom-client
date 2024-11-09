import { useMemo, useState } from 'react';

import { Trash2Icon } from 'lucide-react';
import Image from 'next/image';

import { InputNumber } from '@/components/ui/InputNumber';
import { useCartContext } from '@/contexts/cart.context';
import { formatPrice } from '@/lib/number.utils';
import { CartItemData } from '@/types/product.types';

type CartItemProps = {
  data: CartItemData;
};

const images = [
  'https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

export function CartItem({ data }: CartItemProps) {
  const { selectedQuantity, product } = data;
  const { name, price, description } = product;

  const [quantity, setQuantity] = useState(selectedQuantity);
  const onAddOrIncrItemToCart = useCartContext((state) => state.addOrIncrItemToCart);
  const removeItemFromCart = useCartContext((state) => state.removeItemFromCart);

  const totalPrice = useMemo(() => price * selectedQuantity, [price, selectedQuantity]);

  const onUpdateQuantity = (val: number) => {
    setQuantity(val);
    onAddOrIncrItemToCart(product, val - quantity);
  };

  const onRemoveItem = () => {
    removeItemFromCart(product.id);
  };

  return (
    <div className="flex gap-4">
      <Image
        src={images[0]}
        alt={data.product.name}
        className="object-cover rounded-md"
        width={80}
        height={100}
      />
      <div className="flex-1 flex flex-col justify-between">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="ts-body-sm">{name}</h3>
            <p className="ts-body-xs text-foreground-subtle mt-1 line-clamp-2">{description}</p>
          </div>
          <button
            onClick={onRemoveItem}
            type="button"
            aria-label="delete"
            className="text-foreground-subtle hover:text-foreground"
          >
            <Trash2Icon className="w-4 h-4" />
          </button>
        </div>
        <div className="flex items-center justify-between">
          <span className="ts-body-sm font-bold">{formatPrice(totalPrice)}</span>
          <div className="w-16">
            <InputNumber
              min={1}
              max={product.quantity}
              value={quantity}
              onChange={onUpdateQuantity}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
