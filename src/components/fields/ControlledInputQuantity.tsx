'use client';

import { Controller, FieldValues } from 'react-hook-form';

import { InputQuantity, type InputQuantityProps } from '@/components/ui/InputQuantity';
import { BaseControlledFieldProps } from '@/types/form.types';
import { getFormErrorMessage } from '@/utils/form.utils';

type Props<T extends FieldValues> = BaseControlledFieldProps<T> & InputQuantityProps;

export function ControlledInputQuantity<T extends FieldValues>({
  control,
  errors,
  name,
  ...props
}: Props<T>) {
  return (
    <Controller
      render={({ field: { value, ...otherFieldProps } }) => (
        <InputQuantity
          {...otherFieldProps}
          {...props}
          value={value || 0}
          error={getFormErrorMessage(errors, name)}
        />
      )}
      name={name}
      control={control}
    />
  );
}
