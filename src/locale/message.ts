import { CommonMessageKey, commonMessages } from "@/locale/messages/common";
import { HomeMessageKey, homeMessages } from "@/locale/messages/home";
import { AuthMessageKey, authMessages } from "@/locale/messages/auth";
import { IndustryMessageKey, JobMessageKey, industryMessages } from "@/locale/messages/industry";
import {
  CurriculumMessageKey,
  curriculumMessages,
  curriculumUIMessages,
  CurriculumUITextKey
} from "@/locale/messages/curriculum";

export type LocaleData = Record<string, { 'ko': string, 'en': string }>

export const MessageKey = {
  ...CommonMessageKey,
  ...HomeMessageKey,
  ...AuthMessageKey,
  ...IndustryMessageKey,
  ...JobMessageKey,
  ...CurriculumMessageKey,
  ...CurriculumUITextKey
}

export const messages: LocaleData = {
  ...commonMessages,
  ...homeMessages,
  ...authMessages,
  ...industryMessages,
  ...curriculumMessages,
  ...curriculumUIMessages
}
