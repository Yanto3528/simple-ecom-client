import { ShoppingCart, User } from 'lucide-react';
import Link from 'next/link';

import { paths } from '@/lib/paths';

import { Logo } from '../Logo';

import { Searchbar } from './Searchbar';

const navLinks = [
  {
    label: 'Home',
    href: paths.home(),
  },
  {
    label: 'Shop',
    href: paths.home(),
  },
  {
    label: 'About',
    href: paths.home(),
  },
];

export function Navbar() {
  return (
    <header className="sticky top-0 mb-10 bg-white shadow-sm z-20">
      {/* <div className="text-center py-2 bg-info text-white">Free shipping worldwide!</div> */}
      <div className="container py-4">
        <nav className="flex items-center gap-10">
          <Logo />
          <div className="flex-1 flex items-center justify-between gap-10">
            <ul className="flex items-center gap-3">
              {navLinks.map((navLink) => (
                <li key={navLink.label}>
                  <Link href={navLink.href} className="hover:text-primary ts-body-sm">
                    {navLink.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Searchbar />
            <div className="flex items-center gap-4">
              <button
                type="button"
                className="ts-body-sm text-primary flex items-center gap-1 font-medium"
              >
                <User size={16} />
                Login / Register
              </button>
              <button type="button" className="ts-body-sm relative" aria-label="Shopping cart">
                <ShoppingCart size={16} />
                <div className="w-4 h-4 rounded-full bg-primary text-white text-3xs flex items-center justify-center absolute top-0 right-0 -translate-y-[70%] translate-x-[60%]">
                  0
                </div>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
