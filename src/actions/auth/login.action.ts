'use server'

import { createFormAction } from '@/utils/formActions'

export const loginAction = createFormAction(
  ['email', 'password'] as const,
  { email: 'Email', password: 'Password' },
  async ({ email, password }) => {
    console.log({ email, password })
    return null
  }
)
