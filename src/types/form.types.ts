import { ReactNode } from 'react';

import { Control, FieldErrors, FieldValues, Path } from 'react-hook-form';

import { elementWrapperStyles } from '@/components/ui/FormElementWrapper/FormElementWrapper.styles';
import { VariantProps } from '@/lib/tailwind-variant';

export type ElementWrapperStylesProps = VariantProps<typeof elementWrapperStyles>;

export type BaseFormElementProps = {
  error?: ReactNode;
  disabled?: boolean;
};

export type ElementWrapperProps = Omit<ElementWrapperStylesProps, 'state'> &
  BaseFormElementProps & {
    wrapperClassName?: string;
  };

export type FormElementProps = ElementWrapperProps & {
  label?: ReactNode;
  labelClassName?: string;
};

export type BaseControlledFieldProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  errors?: FieldErrors<T>;
};
