import { ComponentPropsWithoutRef } from 'react';

import { VariantProps } from '@/lib/tailwind-variant';

import { buttonStyles } from './Button.styles';

type ButtonStylesProps = VariantProps<typeof buttonStyles>;

export type ButtonProps = ComponentPropsWithoutRef<'button'> &
  ButtonStylesProps & {
    loading?: boolean;
  };
