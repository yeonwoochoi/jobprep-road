'use server'

import { createFormAction } from "@/utils/formActions";
import delay from "@/utils/delay";

export const loginAction = createFormAction(
  ["email", "password"] as const,
  { email: "Email", password: "Password" },
  async ({ email, password }) => {
    await delay(2000)
    console.log({ email, password })
    return null
  }
)