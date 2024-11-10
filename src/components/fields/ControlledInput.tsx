'use client';

import { Controller, FieldValues } from 'react-hook-form';

import { Input, type InputProps } from '@/components/ui/Input';
import { BaseControlledFieldProps } from '@/types/form.types';
import { getFormErrorMessage } from '@/utils/form.utils';

type Props<T extends FieldValues> = BaseControlledFieldProps<T> & InputProps;

export function ControlledInput<T extends FieldValues>({
  control,
  errors,
  name,
  ...props
}: Props<T>) {
  return (
    <Controller
      render={({ field: { value, ...otherFieldProps } }) => (
        <Input
          {...otherFieldProps}
          {...props}
          value={value || ''}
          error={getFormErrorMessage(errors, name)}
        />
      )}
      name={name}
      control={control}
    />
  );
}
