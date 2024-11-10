import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import z from 'zod';

import { ControlledInput } from '@/components/fields/ControlledInput';
import { ControlledInputPassword } from '@/components/fields/ControlledInputPassword';
import { Button } from '@/components/ui/Button';
import { useAuthContext } from '@/contexts/auth.context';
import { useSignupMutation } from '@/hooks/services/auth.service.hook';

const schema = z
  .object({
    name: z.string({ message: 'Name is required' }),
    email: z.string({ message: 'Email is required' }).email('Please enter a valid email'),
    password: z
      .string({ message: 'Password is required' })
      .min(6, 'Password must be at least 6 or more characters'),
    confirmPassword: z
      .string({ message: 'Password is required' })
      .min(6, 'Password must be at least 6 or more characters'),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: 'custom',
        message: 'Password does not match',
        path: ['confirmPassword'],
      });
    }
  });

type FormValues = z.infer<typeof schema>;

export function SignupForm() {
  const setType = useAuthContext((state) => state.setType);
  const closeAuthModal = useAuthContext((state) => state.closeAuthModal);
  const setUser = useAuthContext((state) => state.setUser);

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    resolver: zodResolver(schema),
  });

  const { mutateAsync: signup, isPending } = useSignupMutation();

  const onSubmit = handleSubmit(async (formValues) => {
    const data = await signup(formValues);
    setUser(data);
    closeAuthModal();
  });

  const onClickLoginNow = () => {
    setType('login');
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <ControlledInput
          label="Name"
          placeholder="Enter your name"
          control={control}
          errors={errors}
          name="name"
        />
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
        <ControlledInputPassword
          label="Confirm password"
          placeholder="Enter your password again"
          control={control}
          errors={errors}
          name="confirmPassword"
        />
        <Button loading={isPending} type="submit" className="mt-4">
          Signup
        </Button>
      </form>
      <p className="ts-body-sm mt-3 mb-2 text-center">
        Already have an account?{' '}
        <button
          type="button"
          onClick={onClickLoginNow}
          className="text-primary underline underline-offset-4 font-medium hover:no-underline"
        >
          Login now
        </button>
      </p>
    </div>
  );
}
