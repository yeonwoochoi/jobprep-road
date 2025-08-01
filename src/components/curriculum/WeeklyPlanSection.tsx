'use client'

import { useState, SVGProps } from 'react';
import { WeeklyPlan } from '@/types/curriculum';
import CurriculumSection from "@/components/curriculum/CurriculumSection";
import { MessageKey } from "@/locale/message";
import LocaleText from "@/components/common/LocaleText";

// --- 아이콘 정의 ---
const ChevronDownIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 20 20" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
)

const CheckCircleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 20 20" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
)

const ClipboardListIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}>
    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"/>
  </svg>
)

type MessageKeyValue = typeof MessageKey[keyof typeof MessageKey];

export const weekMessageKeys: { [key: number]: MessageKeyValue } = {
  1: MessageKey.WEEK_1,
  2: MessageKey.WEEK_2,
  3: MessageKey.WEEK_3,
  4: MessageKey.WEEK_4,
  5: MessageKey.WEEK_5,
  6: MessageKey.WEEK_6,
  7: MessageKey.WEEK_7,
  8: MessageKey.WEEK_8,
  9: MessageKey.WEEK_9,
  10: MessageKey.WEEK_10,
  11: MessageKey.WEEK_11,
  12: MessageKey.WEEK_12,
};

// --- 주간 계획 섹션 컴포넌트 ---
export function WeeklyPlanSection({ weeklyPlan }: { weeklyPlan: WeeklyPlan[] }) {
  // 현재 열려있는 아코디언 아이템의 인덱스를 저장. 기본으로 0번째(1주차)를 열어둠.
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // 아코디언을 토글하는 함수
  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {weeklyPlan.map((weekData, index) => (
        <CurriculumSection key={`Week-${weekData.week}`} category={<LocaleText keyOrLocaleData={weekMessageKeys[weekData.week]}/>} contentId={`week-${weekData.week}`}>
          <div key={weekData.week} className="rounded-lg border border-neutral-200 bg-neutral-50">
            {/* 아코디언 헤더 (클릭 가능한 영역) */}
            <button
              onClick={() => handleToggle(index)}
              className="flex w-full items-center justify-between p-5 text-left"
            >
              <div className="flex items-baseline gap-x-3">
                <span className="text-sm font-semibold text-neutral-500">{weekData.week}주차</span>
                <h3 className="text-lg font-semibold text-neutral-800">{weekData.title}</h3>
              </div>
              <ChevronDownIcon
                className={`h-6 w-6 text-neutral-500 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
              />
            </button>

            {/* 아코디언 콘텐츠 (열렸을 때만 보임) */}
            {openIndex === index && (
              <div className="px-5 pb-6">
                <p className="mb-6 text-base text-neutral-600">
                  {weekData.description}
                </p>

                {/* 학습 주제 목록 */}
                <div className="space-y-4">
                  {weekData.learningTopics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="flex items-start gap-x-3">
                      <CheckCircleIcon className="h-5 w-5 flex-shrink-0 text-neutral-400 mt-1.5" />
                      <div>
                        <h4 className="font-semibold text-neutral-800">{topic.topic}</h4>
                        <p className="mt-1 text-sm text-neutral-500">{topic.guideline}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* 주간 과제 (있을 경우에만 렌더링) */}
                {weekData.weeklyTask && (
                  <div className="mt-8 rounded-md border border-neutral-200 bg-neutral-50 p-4">
                    <div className="flex items-center gap-x-2">
                      <ClipboardListIcon className="h-5 w-5 text-neutral-500"/>
                      <h4 className="font-semibold text-neutral-700">주간 과제</h4>
                    </div>
                    <p className="mt-2 text-sm text-neutral-600">
                      {weekData.weeklyTask}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </CurriculumSection>
      ))}
    </>
  );
}