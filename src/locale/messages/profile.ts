import { LocaleData } from "@/locale/message";

export enum ProfileMessageKey {
  PROFILE_HEADER_EYEBROW = 'PROFILE_HEADER_EYEBROW',
  PROFILE_HEADER_TITLE = 'PROFILE_HEADER_TITLE',
  PROFILE_HEADER_DESCRIPTION = 'PROFILE_HEADER_DESCRIPTION',
}

export const profileMessages: LocaleData = {
  PROFILE_HEADER_EYEBROW: {
    ko: '대시보드',
    en: 'Dashboard',
  },
  PROFILE_HEADER_TITLE: {
    ko: '프로필',
    en: 'Profile',
  },
  PROFILE_HEADER_DESCRIPTION: {
    ko: '생성된 커리큘럼을 관리하고, 프로필 및 계정 설정을 변경할 수 있습니다.',
    en: 'Manage your curriculums and edit your profile and account settings.',
  },
}
