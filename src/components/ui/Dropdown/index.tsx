'use client';

import { Root, Trigger, Group, Portal, Sub } from '@radix-ui/react-dropdown-menu';

import { DropdownContent } from './components/DropdownContent';
import { DropdownItem } from './components/DropdownItem';
import { DropdownLabel } from './components/DropdownLabel';
import { DropdownSeparator } from './components/DropdownSeparator';

const Dropdown = Root;
const DropdownTrigger = Trigger;
const DropdownGroup = Group;
const DropdownPortal = Portal;
const DropdownSub = Sub;

export {
  Dropdown,
  DropdownTrigger,
  DropdownGroup,
  DropdownPortal,
  DropdownSub,
  DropdownContent,
  DropdownItem,
  DropdownLabel,
  DropdownSeparator,
};
