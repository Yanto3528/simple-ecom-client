import { ReactNode } from 'react';

import { XIcon } from 'lucide-react';

import { VariantProps } from '@/lib/tailwind-variant';

import { chipStyles, chipCloseStyles } from './Chip.styles';

type ChipStylesProps = VariantProps<typeof chipStyles>;

export type ChipProps = ChipStylesProps & {
  children: ReactNode;
  className?: string;
  closeable?: boolean;
  onClose?: () => void;
};

export function Chip({
  children,
  className,
  colorScheme,
  variant,
  rounded,
  closeable,
  onClose,
}: ChipProps) {
  return (
    <span className={chipStyles({ colorScheme, variant, rounded, className })}>
      <span className="relative">{children}</span>
      {closeable && (
        <button
          type="button"
          onClick={onClose}
          className={chipCloseStyles({ colorScheme, variant })}
          aria-label="close"
        >
          <XIcon size={12} />
        </button>
      )}
    </span>
  );
}
