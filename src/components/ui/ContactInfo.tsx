'use client';

import LocaleText from '@/components/common/LocaleText';
import { MessageKey } from '@/locale/message';
import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/locale';
import clsx from 'clsx';
import { useToast } from '@/hooks/useToast';
import { ComponentPropsWithoutRef } from 'react';

type ContactInfoProps = {
  invert?: boolean;
} & ComponentPropsWithoutRef<'div'>;

export default function ContactInfo({ invert = false, className, ...props }: ContactInfoProps) {
  const { language } = useLanguage();
  const { toastSuccess, toastError } = useToast();

  const handleCopy = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      toastSuccess(t(MessageKey.COPY_SUCCESS, language));
    } catch (err) {
      toastError(t(MessageKey.COPY_FAILURE, language));
    }
  };

  return (
    <div className={className} {...props}>
      <div>
        <div className={clsx('text-xl font-bold', invert ? 'text-white' : 'text-neutral-950')}>
          <LocaleText keyOrLocaleData={MessageKey.HEADER_CONTACT_EMAIL_TITLE} />
        </div>
        <button
          onClick={() => handleCopy('chldusdn20@gmail.com')}
          className={clsx(
            'mt-4 cursor-pointer',
            invert
              ? 'text-neutral-100 hover:text-neutral-300'
              : 'text-neutral-900 hover:text-neutral-700'
          )}
        >
          chldusdn20@gmail.com
        </button>
      </div>
      <div>
        <div className={clsx('text-xl font-bold', invert ? 'text-white' : 'text-neutral-950')}>
          <LocaleText keyOrLocaleData={MessageKey.HEADER_CONTACT_PHONE_TITLE} />
        </div>
        <button
          onClick={() => handleCopy('+82-10-8560-3465')}
          className={clsx(
            'mt-4 cursor-pointer',
            invert
              ? 'text-neutral-100 hover:text-neutral-300'
              : 'text-neutral-900 hover:text-neutral-700'
          )}
        >
          +82-10-8560-3465
        </button>
      </div>
    </div>
  );
}
