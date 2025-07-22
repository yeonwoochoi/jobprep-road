'use server'

import { createFormAction } from "@/utils/formActions";
import delay from "@/utils/delay";

// TODO
export const resetNewPassword = createFormAction(
  ['email', 'token', 'password'] as const,
  { email: "Email", token: "Token", password: "Password" },
  async ({ email, token, password }) => {
    await delay(2000)
    console.log({ email, token, password })
    return { email, token, password }
  }
)