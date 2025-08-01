import { ReactNode, useId } from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { Border } from '@/components/ui/Border';

// Props 타입도 함께 정의해줍니다.
interface SectionProps {
  category: string | ReactNode;
  contentId: string;
  children: ReactNode;
}

// export default 또는 export const 로 내보냅니다.
export default function CurriculumSection({ category, contentId, children }: SectionProps) {
  const id = useId();

  return (
    <FadeIn key={id} className="mt-24">
      <Border className="pt-20">
        <div id={contentId} className="grid grid-cols-4">
          <div className="col-span-full sm:col-span-1 mb-6 sm:mb-0">
            <span className="text-sm font-semibold text-neutral-950">{category}</span>
          </div>
          <div className="col-span-full sm:col-span-3">
            {children}
          </div>
        </div>
      </Border>
    </FadeIn>
  );
}