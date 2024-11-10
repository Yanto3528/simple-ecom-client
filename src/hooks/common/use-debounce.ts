import { useEffect, useState } from 'react';

export function useDebounce<T>(defaultValue: T, delay = 500) {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    const timer = setTimeout(() => {
      setValue(defaultValue);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [defaultValue, delay]);

  return value;
}
