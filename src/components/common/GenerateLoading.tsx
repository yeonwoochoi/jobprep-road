'use client'

import { CurriculumMessageKey } from "@/locale/messages/curriculum";
import { useEffect, useState } from "react";
import { Loader } from "lucide-react";
import LocaleText from "@/components/common/LocaleText";

const loadingMessageKeys: CurriculumMessageKey[] = [
  CurriculumMessageKey.GENERATE_LOADING_TEXT_1,
  CurriculumMessageKey.GENERATE_LOADING_TEXT_2,
  CurriculumMessageKey.GENERATE_LOADING_TEXT_3,
]

const DURATION_PER_MESSAGE = 4000

export default function GenerateLoading() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % loadingMessageKeys.length)
    }, DURATION_PER_MESSAGE)
    return () => clearInterval(interval);
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm">
      <Loader className="h-16 w-16 animate-spin text-neutral-800" />
      <div className="mt-8 text-xl font-semibold text-neutral-700 text-center w-full max-w-lg px-4 h-8 relative overflow-hidden">
        {loadingMessageKeys.map((key, index) => (
          <div
            key={key}
            className={`absolute inset-x-0 transition-all duration-500 ease-in-out ${
              currentIndex === index
                ? 'opacity-100 translate-y-0' // 현재 메시지는 보임
                : 'opacity-0 translate-y-full' // 나머지는 아래로 숨김
            }`}
          >
            <LocaleText keyOrLocaleData={key} />
          </div>
        ))}
      </div>
    </div>
  );
}