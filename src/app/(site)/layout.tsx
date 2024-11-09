import { ReactNode } from 'react';

import { CartSheet } from '@/components/common/CartSheet';
import { Navbar } from '@/components/common/Navbar';
import { CartProvider } from '@/contexts/cart.context';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <CartProvider>
      <Navbar />
      <main className="container">
        {children}
        <CartSheet />
      </main>
    </CartProvider>
  );
}
