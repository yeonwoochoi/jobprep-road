'use client'

import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import LocaleText from "@/components/common/LocaleText";
import { MessageKey } from "@/locale/message";
import ResetPasswordForm from "@/components/auth/ResetPasswordForm";

export default function Page() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const email = searchParams.get('email') as string
  const token = searchParams.get('token') as string

  const handleResetPasswordSuccess = () => {
    router.push("/auth/login")
  }

  return (
    <>
      <div>
        <Link href="/">
          <Logo className="h-8" />
        </Link>
        <p className="mt-10 text-2xl font-bold">
          <LocaleText keyOrLocaleData={MessageKey.AUTH_FORGOT_PASSWORD_TITLE} />
        </p>
      </div>
      <ResetPasswordForm email={email} token={token} onSuccess={handleResetPasswordSuccess} />
    </>
  )
}