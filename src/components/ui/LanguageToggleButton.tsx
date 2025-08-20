'use client';

import { GlobeIcon } from '@/components/ui/Icons';
import { useLanguage } from '@/contexts/LanguageContext';
import { ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  invert?: boolean;
  iconClassName?: string;
};

export default function LanguageToggleButton({
  invert = false,
  className,
  iconClassName,
  ...props
}: ButtonProps) {
  const { toggleLanguage } = useLanguage();
  className = clsx(className, 'cursor-pointer', invert ? 'text-white' : 'text-neutral-950');

  return (
    <button onClick={() => toggleLanguage()} className={className} {...props}>
      <GlobeIcon className={clsx('h-6 w-6', iconClassName)} />
    </button>
  );
}
