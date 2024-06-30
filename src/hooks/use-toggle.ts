'use client';

import { useState, useCallback } from 'react';

export const useToggle = (initialValue = false) => {
  const [show, setShow] = useState(initialValue);

  const toggle = useCallback(() => setShow((prevShow) => !prevShow), []);
  const open = useCallback(() => setShow(true), []);
  const close = useCallback(() => setShow(false), []);

  return [show, { open, close, toggle }] as const;
};
