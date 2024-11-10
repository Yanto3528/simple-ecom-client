'use client';

import {
  Dialog,
  DialogBody,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/Dialog';
import { useAuthContext } from '@/contexts/auth.context';

import { LoginForm } from './LoginForm';
import { SignupForm } from './SignupForm';

export function AuthModal() {
  const isAuthModalOpen = useAuthContext((state) => state.isAuthModalOpen);
  const setAuthModal = useAuthContext((state) => state.setAuthModal);
  const type = useAuthContext((state) => state.type);

  return (
    <Dialog open={isAuthModalOpen} onOpenChange={setAuthModal}>
      <DialogContent>
        <DialogHeader className="flex flex-col items-center">
          <div className="text-center">
            <DialogTitle className="ts-heading-sm">
              {type === 'login' ? 'Login now' : 'Signup now'}
            </DialogTitle>
            <DialogDescription className="mt-1">Purchase your favorite products</DialogDescription>
          </div>
        </DialogHeader>
        <DialogBody>{type === 'login' ? <LoginForm /> : <SignupForm />}</DialogBody>
      </DialogContent>
    </Dialog>
  );
}
