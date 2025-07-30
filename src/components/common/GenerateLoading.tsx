'use client'

import { CurriculumMessageKey } from "@/locale/messages/curriculum";
import { CSSProperties, useEffect, useState } from "react";
import { Loader } from "lucide-react";
import LocaleText from "@/components/common/LocaleText";

export type GenerationStatus = 'idle' | 'preparing' | 'generating' | 'success' | 'error';

const statusToMessageKey: Partial<Record<GenerationStatus, CurriculumMessageKey>> = {
  preparing: CurriculumMessageKey.GENERATE_STATUS_PREPARING,
  generating: CurriculumMessageKey.GENERATE_STATUS_GENERATING,
  success: CurriculumMessageKey.GENERATE_STATUS_SUCCESS,
  error: CurriculumMessageKey.GENERATE_STATUS_ERROR,
};

// 애니메이션 상태를 관리할 자식 컴포넌트
interface AnimatedMessageProps {
  messageKey: CurriculumMessageKey;
}

function AnimatedMessage({ messageKey }: AnimatedMessageProps) {
  // 컴포넌트가 보일지 여부를 결정하는 상태
  const [isVisible, setIsVisible] = useState(false);

  // 컴포넌트가 마운트된 직후에 isVisible 상태를 true로 변경하여 애니메이션을 트리거
  useEffect(() => {
    // requestAnimationFrame을 사용하거나 작은 timeout을 주어
    // 브라우저가 초기 상태(hidden)를 렌더링한 후 최종 상태(visible)로 변경하도록 보장
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10); // 아주 작은 딜레이

    return () => clearTimeout(timer);
  }, []); // 이 useEffect는 컴포넌트 마운트 시 한 번만 실행됩니다.

  const style: CSSProperties = {
    // CSS transition 설정
    transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out',
    // isVisible 상태에 따라 동적으로 스타일 변경
    transform: isVisible ? 'translateY(0)' : 'translateY(100%)', // 아래에서 위로
    opacity: isVisible ? 1 : 0, // 투명에서 불투명으로
  };

  return (
    <div style={style}>
      <LocaleText keyOrLocaleData={messageKey} />
    </div>
  );
}


interface GenerateLoadingProps {
  status: GenerationStatus;
}

export default function GenerateLoading({ status }: GenerateLoadingProps) {
  const messageKey = statusToMessageKey[status];

  useEffect(() => {
    document.body.classList.add('loading-overlay-active')

    return () => {
      document.body.classList.remove('loading-overlay-active')
    }
  }, [])

  if (!messageKey) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm">
      <Loader className="h-16 w-16 animate-spin text-neutral-800" />
      <div className="mt-8 text-xl font-semibold text-neutral-700 text-center w-full max-w-lg px-4 h-8 relative overflow-hidden">
        {/*
          핵심 포인트:
          messageKey를 React의 `key` prop으로 사용합니다.
          status가 바뀌면 messageKey도 바뀌고, React는 이 AnimatedMessage 컴포넌트를
          완전히 새로운 컴포넌트로 인식하여 다시 마운트시킵니다.
          이 과정에서 AnimatedMessage 내부의 useEffect가 다시 실행되며 애니메이션이 매번 새로 시작됩니다.
        */}
        <AnimatedMessage key={messageKey} messageKey={messageKey} />
      </div>
    </div>
  );
}