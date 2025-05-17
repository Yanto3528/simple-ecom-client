import { EyeIcon, ShoppingBagIcon } from 'lucide-react';
import Image from 'next/image';

import { Button } from '@/components/ui/Button';
import { HtmlRenderer } from '@/components/ui/HtmlRenderer';
import { paths } from '@/lib/paths';
import { ProductCardData } from '@/types/product.types';
import { formatPrice } from '@/utils/number.utils';

import { Link } from '../../common/Link';

type ProductCardProps = {
  data: ProductCardData;
};

export function ProductCard({ data }: ProductCardProps) {
  const { name, description, price, slug, medias } = data;

  const image = medias[0];
  return (
    <Link href={paths.products.details(slug)}>
      <div className="relative group cursor-pointer rounded-xl overflow-hidden">
        <div className="relative w-full aspect-square">
          <Image
            fill
            src={image.url}
            alt={image.caption}
            className="object-cover group-hover:scale-[1.15] transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/80" />
        </div>
        <div className="absolute bottom-0 left-0 w-full text-white transition-all duration-700 group-hover:translate-y-0 translate-y-[28%] overflow-hidden">
          <div className="group-hover:opacity-100 opacity-0 pb-5 transition-all duration-700 flex items-center justify-center w-full gap-4">
            <Button
              radius="full"
              colorScheme="secondary"
              size="sm"
              className="translate-y-1/2 group-hover:translate-y-0 transition-all duration-700"
            >
              <EyeIcon /> Quick view
            </Button>
            <Button
              radius="full"
              size="sm"
              colorScheme="secondary"
              className="translate-y-1/2 group-hover:translate-y-0 transition-all duration-700 delay-100"
            >
              <ShoppingBagIcon /> Add to cart
            </Button>
          </div>
          <div className="relative p-4 overflow-hidden">
            <div className="relative z-[1]">
              <h3 className="hover:text-tertiary font-semibold line-clamp-2">{name}</h3>
              <p className="ts-body-base text-foreground-light font-medium">{formatPrice(price)}</p>
              <div className="mt-4">
                <div className="line-clamp-2 ts-body-sm">
                  <HtmlRenderer preview>{description}</HtmlRenderer>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-[300%] -translate-x-1/2 translate-y-1/2 aspect-square bg-gradient-to-b from-black/50 to-black/0 scale-0 group-hover:scale-100 transition-all duration-700 ease-out rounded-full" />
          </div>
        </div>
      </div>
    </Link>
  );

  // return (
  //   <Link href={paths.products.details(slug)}>
  //     <Card className="h-full">
  //       <CardImage
  //         className="overflow-hidden"
  //         imageProps={{
  //           src: medias[0].url,
  //           alt: medias[0].caption,
  //           className: 'hover:scale-110 transition-all duration-700',
  //         }}
  //       />
  //       <CardBody className="flex flex-col">
  //         <div className="flex-1">
  //           <CardTitle>{name}</CardTitle>
  //           <CardDescription className="line-clamp-2">{description}</CardDescription>
  //         </div>
  //         <p className="ts-body-base font-medium mt-3">{formatPrice(price)}</p>
  //       </CardBody>
  //     </Card>
  //   </Link>
  // );
}
