import { forwardRef, ReactNode } from 'react';

import * as BaseAccordion from '@radix-ui/react-accordion';
import { AccordionContentProps as BaseAccordionContentProps } from '@radix-ui/react-accordion';
import { twMerge } from 'tailwind-merge';

import { useAccordionContext } from '../Accordion.context';
import { accordionContentStyles } from '../Accordion.styles';

export interface AccordionContentProps extends BaseAccordionContentProps {
  className?: string;
  wrapperClassName?: string;
  children: ReactNode;
}

export const AccordionContent = forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ children, className, wrapperClassName, asChild, forceMount }, ref) => {
    const { showBorder } = useAccordionContext();

    return (
      <BaseAccordion.Content
        asChild={asChild}
        forceMount={forceMount}
        ref={ref}
        className={accordionContentStyles({
          showBorder,
          className: wrapperClassName,
        })}
      >
        <div className={twMerge('py-3 px-4', className)}>{children}</div>
      </BaseAccordion.Content>
    );
  }
);
