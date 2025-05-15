import { ComponentPropsWithoutRef } from 'react';

import { Image, type ImageProps } from '@/components/common/Image';
import { cn } from '@/utils';

type Props = ComponentPropsWithoutRef<'div'> & {
  imageProps: ImageProps;
};

export function CardImage({
  className,
  imageProps: { className: imageClassName, ...otherImageProps },
  ...props
}: Props) {
  return (
    <div
      className={cn(
        'relative w-full aspect-square first:rounded-tr-xl first:rounded-tl-xl group',
        className
      )}
      {...props}
    >
      <Image
        fill
        className={cn(
          'object-cover object-center w-full h-full group-first:rounded-tr-xl group-first:rounded-tl-xl',
          imageClassName
        )}
        {...otherImageProps}
      />
    </div>
  );
}
