import { forwardRef } from 'react';

import { Spinner } from '../Spinner';

import { buttonStyles } from './Button.styles';
import { ButtonProps } from './Button.types';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      size,
      colorScheme,
      radius,
      variant,
      className,
      loading,
      disabled,
      isIcon,
      ...props
    },
    ref
  ) => (
    <button
      className={buttonStyles({
        size,
        variant,
        colorScheme,
        radius,
        isIcon,
        className,
      })}
      disabled={disabled || loading}
      type="button"
      ref={ref}
      {...props}
    >
      {loading && <Spinner colorScheme={!variant ? 'white' : 'inherit'} size="sm" />}
      {children}
    </button>
  )
);
