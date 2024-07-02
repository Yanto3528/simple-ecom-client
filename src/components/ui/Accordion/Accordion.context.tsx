import { createContext, useContext, useMemo } from 'react';

import type { AccordionProviderProps } from './index';

export const AccordionContext = createContext<Pick<AccordionProviderProps, 'showBorder'>>({
  showBorder: true,
});

export const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('useAccordionContext must be used within AccordionProvider');
  }

  return context;
};

export function AccordionProvider({ children, showBorder }: AccordionProviderProps) {
  const value = useMemo(
    () => ({
      showBorder,
    }),
    [showBorder]
  );

  return <AccordionContext.Provider value={value}>{children}</AccordionContext.Provider>;
}
