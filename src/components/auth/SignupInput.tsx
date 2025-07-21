'use client'

import TextField from "@/components/ui/TextField";
import { t } from "@/locale";
import { MessageKey } from "@/locale/message";
import { useActionState, useEffect } from "react";
import { signupAction } from "@/actions/signup.action";
import { ApiResult } from "@/lib/api";
import { UserData } from "@/types/types";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/useToast";
import { useRouter } from "next/navigation";

type SignupActionState = ApiResult<UserData | null>

export default function SignupInput() {
  const [state, formAction, isPending] = useActionState<SignupActionState, FormData>(signupAction, {
    status: 'success',
    data: null
  })

  const { language } = useLanguage()
  const { toastSuccess, toastError } = useToast()
  const router = useRouter()

  useEffect(() => {
    if (state) {
      if (state.status === 'error') {
        toastError(state.error)
      } else if (state.status === 'success' && state.data) {
        toastSuccess(t(MessageKey.AUTH_SIGN_UP_SUCCESS, language))
        router.push("/auth/login")
      }
    }
  }, [state])

  return (
    <form action={formAction} className="mt-10 grid grid-cols-1 gap-y-8 w-full">
      <div className="flex w-full gap-x-4">
        <TextField
          label="First Name"
          name="firstName"
          autoComplete="given-name"
          required
          className="flex-1"
          disabled={isPending}
        />
        <TextField
          label="Last Name"
          name="lastName"
          autoComplete="family-name"
          required
          className="flex-1"
          disabled={isPending}
        />
      </div>
      <TextField
        label="Email address"
        name="email"
        type="email"
        autoComplete="email"
        required
        disabled={isPending}
      />
      <TextField
        label="Password"
        name="password"
        type="password"
        autoComplete="current-password"
        required
        disabled={isPending}
      />
      <button
        type="submit"
        className="bg-black hover:bg-gray-700 rounded-full text-white py-3"
        disabled={isPending}
      >
        {isPending ? t(MessageKey.AUTH_SUBMIT_PENDING, language) : t(MessageKey.AUTH_SUBMIT_BUTTON, language)}
      </button>
      {state.status === 'error' && (
        <p className="text-red-600 mt-2">{state.error}</p>
      )}
    </form>
  )
}