import { ReactNode, useId } from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { Border } from '@/components/ui/Border';

interface SectionProps {
  category: string | ReactNode;
  contentId: string;
  children: ReactNode;
}

export default function CurriculumSection({ category, contentId, children }: SectionProps) {
  const id = useId();

  return (
    <FadeIn key={id} className="mt-20">
      <Border className="pt-20">
        <div id={contentId} className="grid grid-cols-4">
          <div className="col-span-full mb-6 sm:col-span-1 sm:mb-0">
            <span className="text-sm font-semibold text-neutral-950">{category}</span>
          </div>
          <div className="col-span-full sm:col-span-3">{children}</div>
        </div>
      </Border>
    </FadeIn>
  );
}
