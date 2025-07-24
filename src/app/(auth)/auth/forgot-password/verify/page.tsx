'use client'

import { redirect, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import LocaleText from "@/components/common/LocaleText";
import { MessageKey } from "@/locale/message";
import VerificationForm from "@/components/auth/VerificationForm";

export default function Page() {
  const searchParams = useSearchParams()
  const email = searchParams.get('email') as string
  if (!email || email === 'undefined' || email === 'null') {
    redirect('/auth/forgot-password')
  }

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
      <VerificationForm email={email} />
    </>
  )
}