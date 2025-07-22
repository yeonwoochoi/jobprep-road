"use server"

import { createFormAction } from "@/utils/formActions";
import delay from "@/utils/delay";

// TODO
export const signupAction = createFormAction(
  ["email", "password", "firstName", "lastName"] as const,
  {
    email: "Email",
    password: "Password",
    firstName: "First Name",
    lastName: "Last Name",
  },
  async ({ email, password, firstName, lastName }) => {
    await delay(2000)
    console.log({ email, password, firstName, lastName })
    return { email, password, firstName, lastName } // TODO: 실제 로직
  }
)