'use client';

import { forwardRef } from 'react';

import { Eye, EyeOff } from 'lucide-react';

import { useToggle } from '@/hooks/common/use-toggle';

import { Input } from '../Input';
import type { InputProps } from '../Input';

export type InputPasswordProps = Omit<InputProps, 'type'>;

export const InputPassword = forwardRef<HTMLInputElement, InputPasswordProps>((props, ref) => {
  const [showContent, { toggle }] = useToggle();

  return (
    <div className="relative">
      <Input
        type={showContent ? 'text' : 'password'}
        ref={ref}
        rightElement={
          <button type="button" onClick={toggle}>
            {showContent ? <EyeOff /> : <Eye />}
            <div className="sr-only">Toggle show password</div>
          </button>
        }
        {...props}
      />
    </div>
  );
});
