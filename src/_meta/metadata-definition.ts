import { Locale } from '@/locale'

type PageMetadata = {
  [key in Locale]: {
    title: string; // 여기에는 페이지 고유의 제목만!
    description: string;
    ogTitle?: string;
    ogDescription?: string;
    ogUrl?: string;
  };
};

export const pageMetadata: Record<string, PageMetadata> = {
  'home': {
    ko: {
      title: '나만의 취업 준비 로드맵',
      description: '취업 준비 과정을 체계적으로 관리하고, 나만의 로드맵을 만드세요.',
    },
    en: {
      title: 'Your Personalized Career Prep Roadmap',
      description: 'Systematically manage your job preparation process and create your own roadmap.',
    },
  },
  'login': {
    ko: {
      title: '로그인',
      description: '취준로드 서비스에 로그인하여 나만의 취업 로드맵을 시작하세요.',
    },
    en: {
      title: 'Login',
      description: 'Log in to Job Prep Road and start your personalized career roadmap.',
    },
  },
  'signup': {
    ko: {
      title: '회원가입',
      description: '취준로드에 가입하고 나만의 취업 준비 로드맵을 만드세요.',
    },
    en: {
      title: 'Sign Up',
      description: 'Sign up for Job Prep Road and create your personalized career roadmap.',
    },
  },
  'forgot-password': {
    ko: {
      title: '비밀번호 찾기',
      description: '취준로드 비밀번호 재설정 페이지입니다.',
    },
    en: {
      title: 'Find Password',
      description: 'Job Prep Road password reset page.',
    },
  },
};

// 기본/공통 메타데이터 (siteName 등)
export const commonMetadata = {
  ko: {
    siteName: '취준로드',
    description: '취업 준비의 모든 것, 취준로드와 함께 시작하세요.',
  },
  en: {
    siteName: 'Job Prep Road',
    description: 'All about job preparation. Start your career journey with Job Prep Road.',
  },
};