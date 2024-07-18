import { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/lib/utils';

import { CardBody } from './components/CardBody';
import { CardDescription } from './components/CardDescription';
import { CardFooter } from './components/CardFooter';
import { CardImage } from './components/CardImage';
import { CardTitle } from './components/CardTitle';

export function Card({ className, children, ...props }: ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={cn('rounded-xl bg-card border border-card-border shadow-md', className)}
      {...props}
    >
      {children}
    </div>
  );
}

export { CardBody, CardDescription, CardImage, CardTitle, CardFooter };
