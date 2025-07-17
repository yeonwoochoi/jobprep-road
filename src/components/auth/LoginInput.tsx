'use client'

import { useActionState, useEffect } from "react";
import { loginAction } from "@/actions/login.action";
import { ApiResult } from "@/lib/api";
import { LoginData } from "@/types/types";

type LoginActionState = ApiResult<LoginData | null>

export default function Page() {
  const [state, formAction, isPending] = useActionState<LoginActionState, FormData>(loginAction, {
    status: 'success',
    data: null,
  })

  useEffect(() => {
    if (state && state.status === 'error') {
      alert(state.error)
    }
  }, [state])

  // TODO
  return (
    <form action={formAction} className="mt-10 grid grid-cols-1 gap-y-8 w-full">
      <label>
        이메일
        <input name="email" type="email" required className="ml-4 outline rounded-sm px-2 py-1" />
      </label>
      <label>
        비밀번호
        <input name="password" type="password" required className="ml-4 outline rounded-sm px-2 py-1" />
      </label>
      <button
        type="submit"
        disabled={isPending}
        className="btn-primary"
      >
        {isPending ? '로그인 중...' : '로그인'}
      </button>
      {state.status === 'error' && (
        <p className="text-red-600 mt-2">{state.error}</p>
      )}
    </form>
  )
}