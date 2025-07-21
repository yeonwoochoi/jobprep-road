import { FadeIn } from "@/components/ui/FadeIn";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import LocaleText from "@/components/common/LocaleText";
import { MessageKey } from "@/locale/message";
import SignupInput from "@/components/auth/SignupInput";

export default function Page() {


  return (
    <div className="flex flex-col flex-1 items-center justify-center pb-24">
      <FadeIn>
        <div className="w-full sm:w-lg px-8">
          <div>
            <Link href="/">
              <Logo className="h-8" />
            </Link>
            <p className="mt-10 text-2xl font-bold">
              <LocaleText messageKey={MessageKey.AUTH_SIGN_UP_TITLE} />
            </p>
            <p className="mt-2 text-sm text-gray-700">
              <LocaleText messageKey={MessageKey.AUTH_ALREADY_REGISTERED} />
              <Link href="/auth/login" className="font-bold hover:underline ml-2" aria-label="Sign in">
                <LocaleText messageKey={MessageKey.AUTH_ALREADY_REGISTERED_LINK} />
              </Link>
            </p>
          </div>
          <SignupInput />
        </div>
      </FadeIn>
    </div>
  )
}