import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import z from 'zod';

import { ControlledInput } from '@/components/fields/ControlledInput';
import { ControlledInputPassword } from '@/components/fields/ControlledInputPassword';
import { Button } from '@/components/ui/Button';
import { useAuthContext } from '@/contexts/auth.context';
import { useLoginMutation } from '@/hooks/services/auth.service.hook';

const schema = z.object({
  email: z.string({ message: 'Email is required' }).email('Please enter a valid email'),
  password: z
    .string({ message: 'Password is required' })
    .min(6, 'Password must be at least 6 or more characters'),
});

type FormValues = z.infer<typeof schema>;

export function LoginForm() {
  const setType = useAuthContext((state) => state.setType);
  const setUser = useAuthContext((state) => state.setUser);
  const closeAuthModal = useAuthContext((state) => state.closeAuthModal);
  const onAuthSuccess = useAuthContext((state) => state.onAuthSuccess);

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(schema),
  });

  const { mutateAsync: login, isPending } = useLoginMutation();

  const onSubmit = handleSubmit(async (formValues) => {
    const data = await login(formValues);
    setUser(data);
    closeAuthModal();
    onAuthSuccess?.(data);
  });

  const onClickSignupNow = () => {
    setType('signup');
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <ControlledInput
          label="Email address"
          placeholder="Enter your email address"
          control={control}
          errors={errors}
          name="email"
        />
        <ControlledInputPassword
          label="Password"
          placeholder="Enter your password"
          control={control}
          errors={errors}
          name="password"
        />
        <Button loading={isPending} type="submit" className="mt-4">
          Login
        </Button>
      </form>
      <p className="ts-body-sm mt-3 mb-2 text-center">
        Don&apos;t have an account yet?{' '}
        <button
          type="button"
          onClick={onClickSignupNow}
          className="text-primary underline underline-offset-4 font-medium hover:no-underline"
        >
          Signup now
        </button>
      </p>
    </div>
  );
}
