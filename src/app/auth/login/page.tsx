import Container from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import LoginInput from "@/components/auth/LoginInput";
import Link from "next/link";

export default function Page() {
  return (
    <Container className="w-full h-full sm:w-lg flex flex-col px-10 justify-center items-start gap-y-4 pb-12">
      <div>
        <Link href="/" aria-label="Home">
          <Logo className="h-8" fillOnHover />
        </Link>
        <p className="mt-10 text-2xl font-bold">계정 로그인</p>
        <p className="mt-2">
          계정이 없으신가요?
          <Link href="/auth/signup" className="font-bold hover:underline ml-2" aria-label="Sign up">
            회원가입하기
          </Link>
        </p>
      </div>
      <LoginInput />
    </Container>
  )
}