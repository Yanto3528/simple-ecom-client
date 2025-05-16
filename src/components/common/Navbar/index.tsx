import { ChevronDownIcon } from 'lucide-react';
import Link from 'next/link';

import { Dropdown, DropdownContent, DropdownItem, DropdownTrigger } from '@/components/ui/Dropdown';
import { paths } from '@/lib/paths';
import { Category } from '@/types/category.types';
import { cn } from '@/utils';

import { Logo } from '../Logo';

import { CartButton } from './CartButton';
import { Header } from './Header';
import { Searchbar } from './Searchbar';
import { UserProfile } from './UserProfile';

type Props = {
  categories: Category[];
  pathname: string;
};

export function Navbar({ categories, pathname }: Props) {
  const navLinks = [
    {
      label: 'Home',
      href: paths.home(),
    },
    {
      label: 'Shop',
      href: paths.search(),
    },
    {
      label: 'Products',
      items: categories.map((category) => ({
        label: category.name,
        href: paths.categories.details(category.slug),
      })),
    },
  ];

  return (
    <Header>
      {/* <div className="text-center py-2 bg-info text-white">Free shipping worldwide!</div> */}
      <div className="container py-4">
        <nav className="flex items-center gap-10">
          <Logo />
          <div className="flex-1 flex items-center justify-between gap-10">
            <ul className="flex items-center gap-3 max-sm:hidden">
              {navLinks.map((navLink) => {
                if (navLink.items) {
                  return (
                    <li key={navLink.label}>
                      <Dropdown>
                        <DropdownTrigger className="hover:text-primary hover:text-shadow-text-bold ts-body-sm py-2 relative inline-flex items-center gap-1 group">
                          {navLink.label}
                          <ChevronDownIcon size={12} />
                        </DropdownTrigger>
                        <DropdownContent>
                          {navLink.items.map((item) => (
                            <Link key={item.label} href={item.href}>
                              <DropdownItem>{item.label}</DropdownItem>
                            </Link>
                          ))}
                        </DropdownContent>
                      </Dropdown>
                    </li>
                  );
                }

                const isActive =
                  pathname === paths.home()
                    ? pathname === navLink.href
                    : navLink.href.includes(pathname);

                return (
                  <li key={navLink.label}>
                    <Link
                      href={navLink.href}
                      className={cn(
                        'hover:text-primary hover:text-shadow-text-bold ts-body-sm py-2 relative',
                        isActive && 'text-shadow-text-bold'
                      )}
                    >
                      {navLink.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Searchbar />
            <div className="flex items-center gap-4">
              <UserProfile />
              <CartButton />
            </div>
          </div>
        </nav>
      </div>
    </Header>
  );
}
