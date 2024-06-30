import { ComponentPropsWithoutRef } from 'react';

import { VariantProps } from '@/lib/tailwind-variant';

import { formLabelStyles } from './FormLabel.styles';

type FormLabelStylesProps = VariantProps<typeof formLabelStyles>;

export type FormLabelProps = FormLabelStylesProps & ComponentPropsWithoutRef<'label'>;

export function FormLabel({ children, className, required, htmlFor, ...props }: FormLabelProps) {
  return (
    <label htmlFor={htmlFor} className={formLabelStyles({ required, className })} {...props}>
      {children}
    </label>
  );
}
