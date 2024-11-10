import Link from 'next/link';

import { paths } from '@/lib/paths';

import { Logo } from '../Logo';

import { CartButton } from './CartButton';
import { Searchbar } from './Searchbar';
import { UserProfile } from './UserProfile';

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
              <UserProfile />
              <CartButton />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
