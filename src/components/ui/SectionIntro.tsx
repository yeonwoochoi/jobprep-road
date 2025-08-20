import clsx from 'clsx';

import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { Container } from '@/components/ui/Container';
import { FadeIn } from '@/components/ui/FadeIn';

type SectionIntroProps = {
  title: string | ReactNode;
  eyebrow?: string | ReactNode;
  children?: ReactNode;
  smaller?: boolean;
  invert?: boolean;
};

export function SectionIntro({
  title,
  eyebrow,
  children,
  smaller = false,
  invert = false,
  ...props
}: Omit<ComponentPropsWithoutRef<typeof Container>, 'title' | 'children'> & SectionIntroProps) {
  return (
    <Container {...props}>
      <FadeIn className="max-w-2xl">
        <h2>
          {eyebrow && (
            <>
              <span
                className={clsx(
                  'font-display mb-6 block text-base font-semibold',
                  invert ? 'text-white' : 'text-neutral-950'
                )}
              >
                {eyebrow}
              </span>
              <span className="sr-only"> - </span>
            </>
          )}
          <span
            className={clsx(
              'font-display block tracking-tight text-balance break-keep',
              smaller ? 'text-2xl font-semibold' : 'text-4xl font-medium sm:text-5xl',
              invert ? 'text-white' : 'text-neutral-950'
            )}
          >
            {title}
          </span>
        </h2>
        {children && (
          <div className={clsx('mt-6 text-xl', invert ? 'text-neutral-300' : 'text-neutral-600')}>
            {children}
          </div>
        )}
      </FadeIn>
    </Container>
  );
}
