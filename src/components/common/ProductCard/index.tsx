import { Card, CardBody, CardDescription, CardImage, CardTitle } from '@/components/ui/Card';
import { paths } from '@/lib/paths';
import { ProductCardData } from '@/types/product.types';
import { formatPrice } from '@/utils/number.utils';

import { Link } from '../Link';

type ProductCardProps = {
  data: ProductCardData;
};

export function ProductCard({ data }: ProductCardProps) {
  const { name, description, price, slug, medias } = data;

  return (
    <Link href={paths.products.details(slug)}>
      <Card className="h-full">
        <CardImage
          className="overflow-hidden"
          imageProps={{
            src: medias[0].url,
            alt: medias[0].caption,
            className: 'hover:scale-110 transition-all duration-500',
          }}
        />
        <CardBody className="flex flex-col">
          <div className="flex-1">
            <CardTitle>{name}</CardTitle>
            <CardDescription className="line-clamp-2">{description}</CardDescription>
          </div>
          <p className="ts-body-base font-medium mt-3">{formatPrice(price)}</p>
        </CardBody>
      </Card>
    </Link>
  );
}
