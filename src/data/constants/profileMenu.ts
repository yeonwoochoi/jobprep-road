import { MessageKey } from '@/locale/message';

export type ActiveMenu =
  | 'profileSettings' // 회원정보 수정
  | 'changePassword' // 비밀번호 변경
  | 'myCurriculums' // 내 커리큘럼
  | 'deleteAccount'; // 회원 탈퇴

export interface ProfileMenuItem {
  key: ActiveMenu;
  titleMessageKey: keyof typeof MessageKey;
}

// 메뉴 아이템 배열을 상수로 정의하고 export 합니다.
export const PROFILE_MENU_ITEMS: readonly ProfileMenuItem[] = [
  {
    key: 'profileSettings',
    titleMessageKey: 'PROFILE_MENU_PROFILE_SETTINGS',
  },
  {
    key: 'changePassword',
    titleMessageKey: 'PROFILE_MENU_CHANGE_PASSWORD',
  },
  {
    key: 'myCurriculums',
    titleMessageKey: 'PROFILE_MENU_MY_CURRICULUMS',
  },
  {
    key: 'deleteAccount',
    titleMessageKey: 'PROFILE_MENU_DELETE_ACCOUNT',
  },
] as const;
