import { ComponentPropsWithoutRef } from 'react';

import { ElementWrapperProps } from '@/types/form.types';

import { elementWrapperStyles } from './FormElementWrapper.styles';

export type FormElementWrapperProps = ComponentPropsWithoutRef<'div'> & ElementWrapperProps;

export function FormElementWrapper({
  children,
  className,
  error,
  disabled,
  colorScheme,
  size,
  radius,
  ...props
}: FormElementWrapperProps) {
  return (
    <div
      className={elementWrapperStyles({
        disabled,
        size,
        colorScheme: error ? 'error' : colorScheme,
        radius,
        className,
      })}
      {...props}
    >
      {children}
    </div>
  );
}
