'use client'

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import LocaleText from "@/components/common/LocaleText";
import { MessageKey } from "@/locale/message";
import ResetPasswordForm from "@/components/auth/ResetPasswordForm";
import { useEffect } from "react";
import { fetchApi } from "@/lib/api";

export default function Page() {
  const searchParams = useSearchParams()
  const email = searchParams.get('email') as string

  useEffect(() => {
    return () => {
      fetchApi('/api/auth/clear-reset-token', { method: 'POST' })
        .catch(console.error);
    }
  }, [])

  return (
    <>
      <div>
        <Link href="/">
          <Logo className="inline-block h-8" />
        </Link>
        <p className="mt-10 text-2xl font-bold">
          <LocaleText keyOrLocaleData={MessageKey.AUTH_FORGOT_PASSWORD_TITLE} />
        </p>
      </div>
      <ResetPasswordForm email={email} />
    </>
  )
}