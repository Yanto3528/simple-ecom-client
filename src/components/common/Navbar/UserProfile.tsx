'use client';

import { LogOutIcon, SettingsIcon, User } from 'lucide-react';

import Avatar from '@/components/ui/Avatar';
import { Dropdown, DropdownContent, DropdownItem, DropdownTrigger } from '@/components/ui/Dropdown';
import { Skeleton } from '@/components/ui/Skeleton';
import { useAuthContext } from '@/contexts/auth.context';
import { useLogoutMutation } from '@/hooks/services/auth.service.hook';
import { getFullName } from '@/utils/auth.utils';

export function UserProfile() {
  const user = useAuthContext((state) => state.user);
  const isLoading = useAuthContext((state) => state.isLoading);
  const openAuthModal = useAuthContext((state) => state.openAuthModal);

  const { mutateAsync: logout } = useLogoutMutation();

  const onClickLoginOrRegister = () => {
    openAuthModal();
  };

  const onLogout = () => {
    logout();
  };

  if (isLoading) {
    return <Skeleton className="size-6" radius="full" />;
  }

  if (user) {
    return (
      <Dropdown>
        <DropdownTrigger>
          <Avatar size="sm" fallback={getFullName(user)} />
        </DropdownTrigger>
        <DropdownContent>
          <DropdownItem leftElement={<SettingsIcon />}>Setting</DropdownItem>
          <DropdownItem onClick={onLogout} leftElement={<LogOutIcon />}>
            Logout
          </DropdownItem>
        </DropdownContent>
      </Dropdown>
    );
  }

  return (
    <button
      onClick={onClickLoginOrRegister}
      type="button"
      className="ts-body-sm text-primary flex items-center gap-1 font-medium"
    >
      <User size={16} />
      Login / Register
    </button>
  );
}
