import { LocaleData } from '@/locale/message'

export enum ProfileMessageKey {
  PROFILE_HEADER_EYEBROW = 'PROFILE_HEADER_EYEBROW',
  PROFILE_HEADER_TITLE = 'PROFILE_HEADER_TITLE',
  PROFILE_HEADER_DESCRIPTION = 'PROFILE_HEADER_DESCRIPTION',
  PROFILE_DIFFICULTY = 'PROFILE_DIFFICULTY',
  PROFILE_CURRICULUM_DETAIL_BUTTON = 'PROFILE_CURRICULUM_DETAIL_BUTTON',

  // Sidebar Menu
  PROFILE_MENU_HEADER = 'PROFILE_MENU_HEADER',
  PROFILE_MENU_PROFILE_SETTINGS = 'PROFILE_MENU_PROFILE_SETTINGS',
  PROFILE_MENU_CHANGE_PASSWORD = 'PROFILE_MENU_CHANGE_PASSWORD',
  PROFILE_MENU_MY_CURRICULUMS = 'PROFILE_MENU_MY_CURRICULUMS',
  PROFILE_MENU_DELETE_ACCOUNT = 'PROFILE_MENU_DELETE_ACCOUNT',

  PROFILE_FETCH_ERROR = 'PROFILE_FETCH_ERROR',
  PROFILE_RETRY_BUTTON = 'PROFILE_RETRY_BUTTON', // 다시 시도
  PROFILE_HOME_BUTTON = 'PROFILE_HOME_BUTTON', // 홈으로 가기
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

  // Sidebar Menu
  PROFILE_MENU_HEADER: {
    ko: '계정 설정',
    en: 'Account Settings',
  },
  PROFILE_MENU_PROFILE_SETTINGS: {
    ko: '회원정보 수정',
    en: 'Profile Settings',
  },
  PROFILE_MENU_CHANGE_PASSWORD: {
    ko: '비밀번호 변경',
    en: 'Change Password',
  },
  PROFILE_MENU_MY_CURRICULUMS: {
    ko: '내 커리큘럼',
    en: 'My Curriculums',
  },
  PROFILE_MENU_DELETE_ACCOUNT: {
    ko: '회원 탈퇴',
    en: 'Delete Account',
  },
  PROFILE_FETCH_ERROR: {
    ko: '사용자 정보를 불러오는 데 실패했습니다.',
    en: 'Failed to load user information.',
  },
  PROFILE_RETRY_BUTTON: {
    ko: '다시 시도',
    en: 'Retry',
  },
  PROFILE_HOME_BUTTON: {
    ko: '홈으로 가기',
    en: 'Go to Home',
  },

  PROFILE_DIFFICULTY: {
    ko: '난이도',
    en: 'Difficulty',
  },
  PROFILE_CURRICULUM_DETAIL_BUTTON: {
    ko: '결과 보기',
    en: 'View Result',
  },
}
