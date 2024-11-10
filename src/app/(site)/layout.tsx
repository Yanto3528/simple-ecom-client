import { ReactNode } from 'react';

import { AuthModal } from '@/components/common/AuthModal';
import { CartSheet } from '@/components/common/CartSheet';
import { Navbar } from '@/components/common/Navbar';
import { Providers } from '@/components/common/Providers';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <Providers>
      <Navbar />
      <main className="container">{children}</main>
      <CartSheet />
      <AuthModal />
    </Providers>
  );
}
