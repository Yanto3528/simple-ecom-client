'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/Button';
import { InputNumber } from '@/components/ui/InputNumber';
import { useCartContext } from '@/contexts/cart.context';
import { Product } from '@/types/product.types';
import { formatPrice } from '@/utils/number.utils';

type ProductDetailsProps = {
  data: Product;
};

export function ProductDetails({ data }: ProductDetailsProps) {
  const { name, price, description, quantity } = data;

  const [value, setValue] = useState(1);

  const addOrIncrItemToCart = useCartContext((state) => state.addOrIncrItemToCart);

  const onAddToCart = () => {
    addOrIncrItemToCart(data, value);
  };

  const onInputChange = (val: number) => {
    setValue(val);
  };

  return (
    <div>
      <div className="mb-3">
        <h1 className="ts-heading-base mb-1">{name}</h1>
        <span className="font-bold">{formatPrice(price)}</span>
      </div>
      <p>{description}</p>
      <div className="mt-4 space-y-4">
        <InputNumber
          min={0}
          max={quantity}
          size="md"
          value={value}
          onChange={onInputChange}
          wrapperClassName="max-w-52"
        />
        <Button className="min-w-52" onClick={onAddToCart}>
          Add to cart
        </Button>
      </div>
    </div>
  );
}
