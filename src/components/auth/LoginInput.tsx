'use client'

import { useActionState, useEffect } from "react";
import { loginAction } from "@/actions/auth/login.action";
import { ApiResult } from "@/lib/api";
import { LoginData } from "@/types/types";
import { MessageKey } from "@/locale/message";
import { t } from "@/locale";
import { useLanguage } from "@/contexts/LanguageContext";
import { TextField, TextFieldWithAction } from "@/components/ui/TextField";
import { useToast } from '@/hooks/useToast'
import { useRouter } from "next/navigation";
import Link from "next/link";
import LocaleText from "@/components/common/LocaleText";

type LoginActionState = ApiResult<LoginData | null>

export default function LoginInput() {
  const [state, formAction, isPending] = useActionState<LoginActionState, FormData>(loginAction, {
    status: 'idle'
  })

  const { language } = useLanguage()
  const { toastError } = useToast()
  const router = useRouter()
  const forgotPasswordButton = (
    <Link href="/auth/forgot-password" className="text-neutral-500 hover:underline ">
      <LocaleText keyOrLocaleData={MessageKey.AUTH_FORGOT_PASSWORD_BUTTON}/>
    </Link>
  )

  useEffect(() => {
    if (state) {
      if (state.status === 'error') {
        toastError(state.error)
      } else if (state.status === 'success' && state.data) {
        router.push("/")
      }
    }
  }, [state])

  return (
    <form action={formAction} className="mt-10 grid grid-cols-1 gap-y-6 w-full">
      <TextField
        label={t({ ko: "이메일", en: "Email Address" }, language)}
        name="email"
        type="email"
        autoComplete="email"
        required
        disabled={isPending}
      />
      <TextFieldWithAction
        label={t({ ko: "비밀번호", en: "Password" }, language)}
        name="password"
        type="password"
        autoComplete="current-password"
        required
        disabled={isPending}
        action={forgotPasswordButton}
      />
      <button
        type="submit"
        className="bg-black hover:bg-gray-700 rounded-full text-white py-3 mt-4 disabled:bg-gray-400 disabled:cursor-not-allowed"
        disabled={isPending}
      >
        {isPending ? t({ ko: '로그인 중...', en: 'Logging in...' }, language) : t({ ko: '로그인', en: 'Login' }, language)}
      </button>
    </form>
  )
}