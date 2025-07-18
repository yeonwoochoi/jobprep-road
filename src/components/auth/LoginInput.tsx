'use client'

import { useActionState, useEffect } from "react";
import { loginAction } from "@/actions/login.action";
import { ApiResult } from "@/lib/api";
import { LoginData } from "@/types/types";
import { MessageKey } from "@/locale/message";
import LocaleText from "@/components/common/LocaleText";
import { t } from "@/locale";
import { useLanguage } from "@/contexts/LanguageContext";
import TextField from "@/components/ui/TextField";

type LoginActionState = ApiResult<LoginData | null>

export default function LoginInput() {
  const [state, formAction, isPending] = useActionState<LoginActionState, FormData>(loginAction, {
    status: 'success',
    data: null,
  })

  const { language } = useLanguage()

  useEffect(() => {
    if (state && state.status === 'error') {
      alert(state.error)
    }
  }, [state])

  return (
    <form action={formAction} className="mt-10 grid grid-cols-1 gap-y-8 w-full">
      <TextField
        label="Email address"
        name="email"
        type="email"
        autoComplete="email"
        required
      />
      <TextField
        label="Password"
        name="password"
        type="password"
        autoComplete="current-password"
        required
      />
      <button
        type="submit"
        disabled={isPending}
        className="bg-black hover:bg-gray-700 rounded-full text-white py-3"
      >
        {isPending ? t(MessageKey.AUTH_SUBMIT_PENDING, language) : t(MessageKey.AUTH_SUBMIT_BUTTON, language)}
      </button>
      {state.status === 'error' && (
        <p className="text-red-600 mt-2">{state.error}</p>
      )}
    </form>
  )
}