import { forwardRef, ComponentPropsWithoutRef, ChangeEventHandler } from 'react';

import { MinusIcon, PlusIcon } from 'lucide-react';

import { FormElementProps } from '@/types/form.types';
import { cn } from '@/utils';

import { FormElementWrapper } from '../FormElementWrapper';
import { FormErrorMessage } from '../FormErrorMessage';
import { FormLabel } from '../FormLabel';

import { inputStyles, inputIconStyles } from './InputQuantity.styles';

export type InputQuantityProps = Omit<
  ComponentPropsWithoutRef<'input'>,
  'size' | 'onChange' | 'value'
> &
  FormElementProps & {
    min: number;
    max?: number;
    onChange: (value: number) => void;
    value: number;
  };

export const InputQuantity = forwardRef<HTMLInputElement, InputQuantityProps>(
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
      size,
      id,
      name,
      max,
      min,
      value,
      onChange,
      ...props
    },
    ref
  ) => {
    const getInputValue = (val: number) => {
      const maxValue = max ? Math.min(max, val) : val;
      return Math.max(min, maxValue);
    };

    const onInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
      const numberValue = Number(event.target.value.replace(/\D/g, ''));
      const val = getInputValue(numberValue);

      onChange?.(val);
    };

    const onIncrement = () => {
      onChange?.(getInputValue(value + 1));
    };

    const onDecrement = () => {
      onChange?.(getInputValue(value - 1));
    };

    return (
      <div className="w-fit">
        {label && (
          <FormLabel htmlFor={id || name} className={labelClassName}>
            {label}
          </FormLabel>
        )}
        <FormElementWrapper
          error={error}
          disabled={disabled}
          colorScheme={colorScheme}
          size={size}
          radius={radius}
          className={cn('w-auto max-w-[unset]', wrapperClassName)}
        >
          <button
            className={inputIconStyles({ size })}
            onClick={onDecrement}
            type="button"
            aria-label="decrement"
            disabled={value === min}
          >
            <MinusIcon />
          </button>
          <input
            ref={ref}
            className={inputStyles({
              size,
              className,
            })}
            disabled={disabled}
            id={id || name}
            value={value}
            onChange={onInputChange}
            {...props}
          />
          <button
            className={inputIconStyles({ size })}
            onClick={onIncrement}
            type="button"
            aria-label="increment"
            disabled={value === max}
          >
            <PlusIcon />
          </button>
        </FormElementWrapper>
        {error && <FormErrorMessage>{error}</FormErrorMessage>}
      </div>
    );
  }
);
