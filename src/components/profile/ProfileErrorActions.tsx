'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import LocaleText from '@/components/common/LocaleText';
import { MessageKey } from '@/locale/message';

export default function ProfileErrorActions() {
  const router = useRouter();

  const handleRefresh = () => {
    router.refresh(); // 현재 페이지의 데이터를 다시 요청 (전체 새로고침 아님)
  };

  return (
    <div className="mt-8 flex items-center gap-x-4">
      {/* 새로고침 버튼 */}
      <button
        onClick={handleRefresh}
        className="cursor-pointer rounded-md bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-700"
      >
        <LocaleText keyOrLocaleData={MessageKey.PROFILE_RETRY_BUTTON} />
      </button>

      {/* 홈으로 가기 버튼 (Link 컴포넌트 사용) */}
      <Link
        href="/"
        className="rounded-md bg-neutral-200 px-4 py-2 text-sm font-semibold text-neutral-700 hover:bg-neutral-300"
      >
        <LocaleText keyOrLocaleData={MessageKey.PROFILE_HOME_BUTTON} />
      </Link>
    </div>
  );
}
