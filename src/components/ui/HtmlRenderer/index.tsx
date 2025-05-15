'use client';

import { useEffect, useState } from 'react';

import dompurify from 'dompurify';

import { cn } from '@/utils';

type Props = {
  children: string;
  preview?: boolean;
};

export function HtmlRenderer({ children, preview }: Props) {
  const [sanitizedInput, setSanitizedInput] = useState(children);

  useEffect(() => {
    setSanitizedInput(dompurify.sanitize(children));
  }, [children]);

  return (
    <div
      className={cn(!preview && 'html-renderer')}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: sanitizedInput }}
    />
  );
}
