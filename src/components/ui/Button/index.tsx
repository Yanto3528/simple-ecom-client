import { Spinner } from '../Spinner';

import { buttonStyles } from './Button.styles';
import { ButtonProps } from './Button.types';

export function Button({
  children,
  size,
  colorScheme,
  radius,
  variant,
  className,
  loading,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonStyles({
        size,
        variant,
        colorScheme,
        radius,
        className,
      })}
      disabled={disabled || loading}
      type="button"
      {...props}
    >
      {loading && <Spinner colorScheme={!variant ? 'white' : 'inherit'} size="sm" />}
      {children}
    </button>
  );
}
