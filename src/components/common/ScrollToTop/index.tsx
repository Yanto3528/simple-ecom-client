'use client';

import { useEffect } from 'react';

import { usePathname, useSearchParams } from 'next/navigation';

export function ScrollToTop() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchStr = searchParams.toString();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [searchStr, pathname]);

  return null;
}
