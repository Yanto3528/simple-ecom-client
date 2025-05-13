export type UserRole = 'USER' | 'ADMIN';

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: UserRole;
  stripeCustomerId: string | null;
  avatarUrl: string | null;
  createdAt: string;
  updatedAt: string;
};

export type SignupPayload = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type LoginPayload = {
  email: string;
  password: string;
};
