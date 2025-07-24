'use client'

import { useRouter, useSearchParams } from "next/navigation";
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
  const router = useRouter();

  useEffect(() => {
    // 1. 토큰 유효성 검사
    const validateToken = async () => {
      const response = await fetchApi('/api/auth/verify-reset-token', {
        method: 'POST'
      })

      if (response.status === 'error') {
        throw new Error('Invalid token');
      }
    }
    validateToken().catch(() => router.replace(`/auth/forgot-password?error=no_token`))

    // 2. beforeunload 핸들러 추가 (페이지 언로드 시 실행)
    const handleUnload = () => {
      const url = '/api/auth/clear-reset-token';
      const data = new Blob([JSON.stringify({})], { type: 'application/json' });
      navigator.sendBeacon(url, data);
    };

    window.addEventListener('beforeunload', handleUnload);

    // 3. 컴포넌트 언마운트 시 실행될 클린업 함수
    return () => {
      // 이벤트 리스너 제거
      window.removeEventListener('beforeunload', handleUnload);

      // 기존 API 호출 유지
      fetchApi('/api/auth/clear-reset-token', { method: 'POST' })
        .catch(console.error);
    };
  }, [router]);

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