import { twMerge } from 'tailwind-merge';

import { VariantProps } from '@/lib/tailwind-variant';

import { skeletonStyles, skeletonAnimationStyles } from './Skeleton.styles';

type SkeletonStylesProps = VariantProps<typeof skeletonStyles>;

export interface SkeletonProps extends SkeletonStylesProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  count?: number;
}

export function Skeleton({ radius, width, height, count, className }: SkeletonProps) {
  if (count && count > 1) {
    const elements = new Array(count).fill(null);
    return (
      <>
        {elements.map((_, index) => (
          <div
            style={{ width, height }}
            className={skeletonStyles({
              radius,
              className: twMerge('mb-2 last:mb-0', className),
            })}
            key={`skeleton-${index}`}
            aria-label="skeleton loading"
          >
            <div className={skeletonAnimationStyles({ radius })} />
          </div>
        ))}
      </>
    );
  }

  return (
    <div style={{ width, height }} className={skeletonStyles({ radius, className })}>
      <div className={skeletonAnimationStyles({ radius })} />
    </div>
  );
}
