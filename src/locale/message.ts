import { CommonMessageKey, commonMessages } from '@/locale/messages/common';
import { HomeMessageKey, homeMessages } from '@/locale/messages/home';
import { AuthMessageKey, authMessages } from '@/locale/messages/auth';
import { IndustryMessageKey, JobMessageKey, industryMessages } from '@/locale/messages/industry';
import {
  CurriculumMessageKey,
  CurriculumUITextKey,
  curriculumMessages,
  curriculumUIMessages,
} from '@/locale/messages/curriculum';
import { ContactMessageKey, contactMessages } from '@/locale/messages/contact';
import { ProfileMessageKey, profileMessages } from '@/locale/messages/profile';

export type LocaleData = Record<string, { ko: string; en: string }>;

export const MessageKey = {
  ...CommonMessageKey,
  ...HomeMessageKey,
  ...AuthMessageKey,
  ...IndustryMessageKey,
  ...JobMessageKey,
  ...CurriculumMessageKey,
  ...CurriculumUITextKey,
  ...ContactMessageKey,
  ...ProfileMessageKey,
};

export const messages: LocaleData = {
  ...commonMessages,
  ...homeMessages,
  ...authMessages,
  ...industryMessages,
  ...curriculumMessages,
  ...curriculumUIMessages,
  ...contactMessages,
  ...profileMessages,
};
