'use client';

import { ChangeEventHandler, forwardRef } from 'react';

import { Input } from '../Input';
import type { InputProps } from '../Input';

export type InputNumberProps = Omit<InputProps, 'onChange' | 'type'> & {
  min: number;
  max?: number;
  onChange?: (value: number) => void;
};

export const InputNumber = forwardRef<HTMLInputElement, InputNumberProps>(
  ({ min, max, onChange, ...props }, ref) => {
    const onInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
      const maxValue = max ? Math.min(max, Number(event.target.value)) : Number(event.target.value);
      const value = Math.max(min, maxValue);

      onChange?.(value);
    };

    return (
      <Input type="number" ref={ref} min={min} max={max} onChange={onInputChange} {...props} />
    );
  }
);
