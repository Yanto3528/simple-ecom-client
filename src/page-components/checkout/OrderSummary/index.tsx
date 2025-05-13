import { Image } from '@/components/common/Image';
import { Card } from '@/components/ui/Card';
import { Divider } from '@/components/ui/Divider';
import { CheckoutSession } from '@/types/checkout.types';
import { formatPrice } from '@/utils/number.utils';

type Props = {
  data: CheckoutSession;
};

export function OrderSummary({ data }: Props) {
  const { currency, items, subtotal, total } = data;
  return (
    <div className="w-[40%] sticky top-[var(--navbar-height-space)] bg-primary-light p-6 rounded-md">
      <h2 className="mb-6">Order Summary</h2>
      <ul className="flex flex-col gap-6">
        {items.map(({ id, product, quantity, price, total: itemTotal }) => (
          <li key={id} className="flex items-start gap-3">
            <Card className="flex items-center justify-center size-[50px] overflow-hidden rounded-md">
              <Image
                src={product.medias[0].url}
                alt={product.medias[0].caption}
                width={50}
                height={50}
              />
            </Card>
            <div className="flex-1">
              <h3 className="font-medium ts-body-sm">{product.name}</h3>
              <p className="text-foreground-subtle ts-body-xs line-clamp-2">
                {product.description}
              </p>
              <div className="flex items-center justify-between gap-2 mt-2">
                <span className="text-foreground-subtle ts-body-xs">
                  {quantity} x {formatPrice(price, currency)}
                </span>
                <h4 className="font-medium ts-body-sm">{formatPrice(itemTotal, currency)}</h4>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <Divider />
      <div className="flex items-center justify-between gap-3 mb-2 ts-body-sm">
        <span>Subtotal</span>
        <h4 className="font-medium">{formatPrice(subtotal, currency)}</h4>
      </div>
      <div className="flex items-center justify-between gap-3 ts-body-lg">
        <span className="font-bold">Total</span>
        <h4>{formatPrice(total, currency)}</h4>
      </div>
    </div>
  );
}
