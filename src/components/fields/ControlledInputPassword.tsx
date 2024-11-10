'use client';

import { Controller, FieldValues } from 'react-hook-form';

import { InputPassword, type InputPasswordProps } from '@/components/ui/InputPassword';
import { BaseControlledFieldProps } from '@/types/form.types';
import { getFormErrorMessage } from '@/utils/form.utils';

type Props<T extends FieldValues> = BaseControlledFieldProps<T> & InputPasswordProps;

export function ControlledInputPassword<T extends FieldValues>({
  control,
  errors,
  name,
  ...props
}: Props<T>) {
  return (
    <Controller
      render={({ field: { value, ...otherFieldProps } }) => (
        <InputPassword
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
