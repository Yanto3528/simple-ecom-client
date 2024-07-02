import { ReactNode } from 'react';

import * as BaseAccordion from '@radix-ui/react-accordion';
import { AccordionMultipleProps } from '@radix-ui/react-accordion';
import { twMerge } from 'tailwind-merge';

import { AccordionProvider } from './Accordion.context';
import { AccordionContent } from './components/AccordionContent';
import { AccordionItem } from './components/AccordionItem';
import { AccordionTrigger } from './components/AccordionTrigger';

type MultipleProps = {
  showBorder?: boolean;
} & AccordionMultipleProps;

export type AccordionProps = Omit<MultipleProps, 'type'>;

export interface AccordionProviderProps {
  children: ReactNode;
  showBorder?: boolean;
}

function Accordion({ className, children, showBorder = true, ...props }: AccordionProps) {
  return (
    <BaseAccordion.Root type="multiple" {...props} className={twMerge('w-full', className)}>
      <AccordionProvider showBorder={showBorder}>{children}</AccordionProvider>
    </BaseAccordion.Root>
  );
}

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
