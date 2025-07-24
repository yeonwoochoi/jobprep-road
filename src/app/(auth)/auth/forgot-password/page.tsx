import { Logo } from "@/components/ui/Logo";
import Link from "next/link";
import LocaleText from "@/components/common/LocaleText";
import { MessageKey } from "@/locale/message";
import EmailForm from "@/components/auth/EmailForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: '비밀번호 찾기 - 취준로드',
};

export default function Page() {
  return (
    <>
      <div>
        <Link href="/">
          <Logo className="inline-block h-8" />
        </Link>
        <p className="mt-10 text-2xl font-bold">
          <LocaleText keyOrLocaleData={MessageKey.AUTH_FORGOT_PASSWORD_TITLE}/>
        </p>
        <p className="mt-2 text-sm text-gray-700">
          <LocaleText keyOrLocaleData={MessageKey.AUTH_FORGOT_PASSWORD_DESCRIPTION_1}/>
          <br/>
          <LocaleText keyOrLocaleData={MessageKey.AUTH_FORGOT_PASSWORD_DESCRIPTION_2}/>
        </p>
      </div>
      <EmailForm/>
    </>
  )
}