import { forwardRef, ComponentPropsWithoutRef, ReactNode } from 'react';

import { FormElementProps } from '@/types/form.types';

import { FormElementWrapper } from '../FormElementWrapper';
import { FormErrorMessage } from '../FormErrorMessage';
import { FormLabel } from '../FormLabel';

import { inputIconStyles, inputStyles } from './Input.styles';

export type InputProps = Omit<ComponentPropsWithoutRef<'input'>, 'size'> &
  FormElementProps & {
    rightElement?: ReactNode;
    rightElementClassName?: string;
    leftElement?: ReactNode;
    leftElementClassName?: string;
  };

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      error,
      disabled,
      colorScheme,
      radius,
      label,
      labelClassName,
      wrapperClassName,
      rightElementClassName,
      leftElementClassName,
      size,
      id,
      rightElement,
      leftElement,
      ...props
    },
    ref
  ) => (
    <div className="w-full">
      {label && (
        <FormLabel htmlFor={id} className={labelClassName}>
          {label}
        </FormLabel>
      )}
      <FormElementWrapper
        error={error}
        disabled={disabled}
        colorScheme={colorScheme}
        size={size}
        radius={radius}
        className={wrapperClassName}
      >
        {leftElement && (
          <span
            className={inputIconStyles({ isLeft: true, size, className: leftElementClassName })}
          >
            {leftElement}
          </span>
        )}
        <input
          ref={ref}
          className={inputStyles({
            size,
            className,
          })}
          disabled={disabled}
          id={id}
          {...props}
        />
        {rightElement && (
          <span
            className={inputIconStyles({ isRight: true, size, className: rightElementClassName })}
          >
            {rightElement}
          </span>
        )}
      </FormElementWrapper>
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </div>
  )
);
