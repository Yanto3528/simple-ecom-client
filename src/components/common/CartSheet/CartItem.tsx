import { useMemo, useState } from 'react';

import { Trash2Icon } from 'lucide-react';

import { Image } from '@/components/common/Image';
import { InputQuantity } from '@/components/ui/InputQuantity';
import { useCartContext } from '@/contexts/cart.context';
import { CartItemData } from '@/types/product.types';
import { formatPrice } from '@/utils/number.utils';

type CartItemProps = {
  data: CartItemData;
};

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

  const media = data.product.medias[0];

  return (
    <div className="flex gap-4">
      <Image
        src={media.url}
        alt={media.caption}
        className="object-cover rounded-md h-[120px]"
        width={100}
        height={120}
      />
      <div className="flex-1 flex flex-col justify-between">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="ts-body-sm">{name}</h3>
            <p className="ts-body-xs text-foreground-subtle mt-1 line-clamp-2">{description}</p>
            <span className="ts-body-xs text-foreground-subtle font-semibold">
              {formatPrice(price)}
            </span>
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
          <div>
            <InputQuantity
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
