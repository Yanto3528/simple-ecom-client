import { Root, Trigger } from '@radix-ui/react-dialog';

import { DialogBody } from './components/DialogBody';
import { DialogContent } from './components/DialogContent';
import { DialogDescription } from './components/DialogDescription';
import { DialogFooter } from './components/DialogFooter';
import { DialogHeader } from './components/DialogHeader';
import { DialogTitle } from './components/DialogTitle';

const Dialog = Root;
const DialogTrigger = Trigger;

export {
  Dialog,
  DialogTrigger,
  DialogDescription,
  DialogTitle,
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogHeader,
};
