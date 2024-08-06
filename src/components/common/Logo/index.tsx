import Link from 'next/link';

import { paths } from '@/lib/paths';

export function Logo() {
  return (
    <Link href={paths.home()}>
      <div className="font-extrabold text-primary">Foodify</div>
    </Link>
  );
}
