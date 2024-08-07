import {
  Card,
  CardBody,
  CardDescription,
  CardImage,
  CardSubtitle,
  CardTitle,
} from '@/components/ui/Card';
import { formatPrice } from '@/lib/number.utils';
import { Product } from '@/types/product.types';

type ProductCardProps = {
  data: Product;
};

export function ProductCard({ data }: ProductCardProps) {
  const { name, category, imageUrl, description, price } = data;

  return (
    <Card className="h-full">
      <CardImage
        className="overflow-hidden"
        imageProps={{
          src: imageUrl,
          alt: name,
          className: 'hover:scale-110 transition-all duration-500',
        }}
      />
      <CardBody className="flex flex-col">
        <div className="flex-1">
          <CardSubtitle>{category}</CardSubtitle>
          <CardTitle>{name}</CardTitle>
          <CardDescription className="line-clamp-2">{description}</CardDescription>
        </div>
        <p className="ts-body-base font-medium mt-3">{formatPrice(price)}</p>
      </CardBody>
    </Card>
  );
}
