'use client';

/* eslint-disable @next/next/no-img-element */
import { SyntheticEvent, useState, ComponentPropsWithoutRef } from 'react';

import { VariantProps } from '@/lib/tailwind-variant';
import { cn } from '@/utils';

import { avatarStyles } from './Avatar.styles';

type AvatarStylesProps = VariantProps<typeof avatarStyles>;

export type AvatarProps = AvatarStylesProps &
  ComponentPropsWithoutRef<'img'> & {
    defaultImage?: string;
    fallback?: string;
  };

const colors = ['bg-danger', 'bg-primary', 'bg-info', 'bg-warning', 'bg-success'];

const getFallbackName = (name?: string) => {
  if (!name) {
    return '';
  }

  if (name.length <= 2) {
    return name;
  }

  const nameParts = name.split(' ');
  const slicedName = nameParts.length <= 2 ? nameParts : nameParts.slice(0, 2);
  return slicedName.map((word) => word?.[0]?.toUpperCase()).join('');
};

function Avatar({ src, size, className, defaultImage, fallback, ...props }: AvatarProps) {
  const [isError, setIsError] = useState(false);
  const fallbackName = getFallbackName(fallback);

  const onErrorLoadImage = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    setIsError(true);
    if (defaultImage) {
      // eslint-disable-next-line no-param-reassign
      event.currentTarget.src = defaultImage;
    }
  };

  const shouldRenderFallback = (isError || !src) && fallbackName;
  const fallbackClassName = colors[Math.floor(Math.random() * colors.length)];

  return (
    <div className="w-fit rounded-full bg-gray-100">
      {shouldRenderFallback ? (
        <div
          className={avatarStyles({
            size,
            className: cn(fallbackClassName, className),
          })}
          suppressHydrationWarning
        >
          {fallbackName}
        </div>
      ) : (
        <img
          onError={onErrorLoadImage}
          className={avatarStyles({ size, className })}
          src={src || defaultImage}
          alt={fallbackName}
          {...props}
        />
      )}
    </div>
  );
}

export default Avatar;
