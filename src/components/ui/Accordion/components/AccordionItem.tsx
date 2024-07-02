import { forwardRef } from 'react';

import * as BaseAccordion from '@radix-ui/react-accordion';
import type { AccordionItemProps } from '@radix-ui/react-accordion';

import { useAccordionContext } from '../Accordion.context';
import { accordionItemStyles } from '../Accordion.styles';

export const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ children, className, ...props }, ref) => {
    const { showBorder } = useAccordionContext();

    return (
      <BaseAccordion.Item
        className={accordionItemStyles({ showBorder, className })}
        {...props}
        ref={ref}
      >
        {children}
      </BaseAccordion.Item>
    );
  }
);
