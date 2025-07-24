'use client'

import { TextField } from "@/components/ui/TextField";
import { t } from "@/locale";
import { useActionState, useEffect } from "react";
import { signupAction } from "@/actions/auth/signup.action";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/useToast";
import { useRouter } from "next/navigation";
import { FormActionResult } from "@/utils/formActions";

export default function SignupInput() {
  const [state, formAction, isPending] = useActionState<FormActionResult<null>, FormData>(signupAction, {
    status: 'idle'
  })

  const { language } = useLanguage()
  const { toastSuccess, toastError } = useToast()
  const router = useRouter()

  useEffect(() => {
    if (state) {
      if (state.status === 'error') {
        toastError(state.error)
      } else if (state.status === 'success') {
        toastSuccess(t({ ko: '회원가입 성공', en: 'Register successful' }, language))
        router.push("/auth/login")
      }
    }
  }, [state])

  return (
    <form action={formAction} className="mt-10 grid grid-cols-1 gap-y-6 w-full">
      <div className="flex w-full gap-x-4">
        <TextField
          label={t({ ko: "이름", en: "First Name" }, language)}
          name="firstName"
          autoComplete="given-name"
          required
          className="flex-1"
          disabled={isPending}
        />
        <TextField
          label={t({ ko: "성", en: "Last Name" }, language)}
          name="lastName"
          autoComplete="family-name"
          required
          className="flex-1"
          disabled={isPending}
        />
      </div>
      <TextField
        label={t({ ko: "이메일", en: "Email Address" }, language)}
        name="email"
        type="email"
        autoComplete="email"
        required
        disabled={isPending}
      />
      <TextField
        label={t({ ko: "비밀번호", en: "Password" }, language)}
        name="password"
        type="password"
        autoComplete="current-password"
        required
        disabled={isPending}
      />
      <button
        type="submit"
        className="bg-black hover:bg-gray-700 rounded-full text-white py-3 mt-4 disabled:bg-gray-400 disabled:cursor-not-allowed"
        disabled={isPending}
      >
        {isPending ? t({ ko: '가입 중...', en: 'Signing up...' }, language) : t({ ko: '회원가입', en: 'Sign Up' }, language)}
      </button>
    </form>
  )
}