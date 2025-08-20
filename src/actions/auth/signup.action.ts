'use server';

import { createFormAction } from '@/utils/formActions';

// TODO
export const signupAction = createFormAction(
  ['email', 'password', 'firstName', 'lastName'] as const,
  {
    email: 'Email',
    password: 'Password',
    firstName: 'First Name',
    lastName: 'Last Name',
  },
  async ({ email, password, firstName, lastName }) => {
    console.log({ email, password, firstName, lastName });
    return null;
  }
);
