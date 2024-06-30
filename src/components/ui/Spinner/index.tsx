import { VariantProps } from '@/lib/tailwind-variant';

import { spinnerStyles } from './Spinner.styles';

type SpinnerStylesProps = VariantProps<typeof spinnerStyles>;

export type SpinnerProps = SpinnerStylesProps & {
  className?: string;
};

export function Spinner({ className, colorScheme, size }: SpinnerProps) {
  return <div aria-label="loading" className={spinnerStyles({ colorScheme, size, className })} />;
}
