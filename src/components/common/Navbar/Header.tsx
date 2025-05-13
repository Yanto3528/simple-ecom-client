'use client';

import { ReactNode, useEffect, useRef } from 'react';

type HeaderProps = {
  children: ReactNode;
};

export function Header({ children }: HeaderProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (ref.current) {
      const computedStyle = getComputedStyle(ref.current);
      const navbarHeight = `${ref.current.clientHeight}px`;
      const navbarSpace = computedStyle.marginBottom;
      document.documentElement.style.setProperty('--navbar-height', navbarHeight);
      document.documentElement.style.setProperty('--navbar-space', navbarSpace);
      document.documentElement.style.setProperty(
        '--navbar-height-space',
        `calc(${navbarHeight} + ${navbarSpace})`
      );
    }
  }, []);

  return (
    <header ref={ref} className="sticky top-0 mb-10 bg-white shadow-sm z-20">
      {children}
    </header>
  );
}
