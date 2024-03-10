'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export interface SidebarItemProps {
  title: string;
  icon: React.ReactNode;
  to: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ title, icon, to }) => {
  const pathname = usePathname();

  return (
    <Link
      href={to}
      className={clsx('flex gap-x-1 items-center transition-all duration-150 ease-in-out', {
        'font-medium': pathname === to,
        'opacity-70 hover:opacity-90': pathname !== to,
      })}
    >
      <span className="dark:fill-white fill-gray-800">{icon}</span>
      <h5 className="text-sm">{title}</h5>
    </Link>
  );
};

export default SidebarItem;
