import { ReactNode } from 'react';

import { headers } from 'next/headers';

import { AuthModal } from '@/components/common/AuthModal';
import { CartSheet } from '@/components/common/CartSheet';
import { Navbar } from '@/components/common/Navbar';
import { Providers } from '@/components/common/Providers';
import { fetchCategories } from '@/services/categories.service';

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const headerList = await headers();
  const pathname = headerList.get('x-current-path') || '/';
  const categories = await fetchCategories();

  return (
    <Providers>
      <Navbar categories={categories} pathname={pathname} />
      <main className="container">{children}</main>
      <CartSheet />
      <AuthModal />
    </Providers>
  );
}
