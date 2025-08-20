import { LocaleData } from '@/locale/message';

export enum AuthMessageKey {
  AUTH_EMAIL_LABEL = 'AUTH_EMAIL_LABEL',
  AUTH_PASSWORD_LABEL = 'AUTH_PASSWORD_LABEL',
  AUTH_LOGIN_TITLE = 'AUTH_LOGIN_TITLE',
  AUTH_NO_ACCOUNT = 'AUTH_NO_ACCOUNT',
  AUTH_SIGNUP_CTA = 'AUTH_SIGNUP_CTA',
  AUTH_SIGN_UP_TITLE = 'AUTH_SIGN_UP_TITLE',
  AUTH_ALREADY_REGISTERED = 'AUTH_ALREADY_REGISTERED',
  AUTH_FORGOT_PASSWORD_BUTTON = 'AUTH_FORGOT_PASSWORD_BUTTON',
  AUTH_FORGOT_PASSWORD_TITLE = 'AUTH_FORGOT_PASSWORD_TITLE',
  AUTH_FORGOT_PASSWORD_DESCRIPTION_1 = 'AUTH_FORGOT_PASSWORD_DESCRIPTION_1',
  AUTH_FORGOT_PASSWORD_DESCRIPTION_2 = 'AUTH_FORGOT_PASSWORD_DESCRIPTION_2',
}

export const authMessages: LocaleData = {
  [AuthMessageKey.AUTH_EMAIL_LABEL]: {
    ko: '이메일',
    en: 'Email',
  },
  [AuthMessageKey.AUTH_PASSWORD_LABEL]: {
    ko: '비밀번호',
    en: 'Password',
  },
  [AuthMessageKey.AUTH_LOGIN_TITLE]: {
    ko: '계정 로그인',
    en: 'Login to your account',
  },
  [AuthMessageKey.AUTH_NO_ACCOUNT]: {
    ko: '계정이 없으신가요?',
    en: 'Don’t have an account?',
  },
  [AuthMessageKey.AUTH_SIGNUP_CTA]: {
    ko: '회원가입하기',
    en: 'Sign Up',
  },
  [AuthMessageKey.AUTH_SIGN_UP_TITLE]: {
    ko: '회원가입하기',
    en: 'Sign up for an account',
  },
  [AuthMessageKey.AUTH_ALREADY_REGISTERED]: {
    ko: '이미 회원이신가요?',
    en: 'Already registered?',
  },
  [AuthMessageKey.AUTH_FORGOT_PASSWORD_BUTTON]: {
    ko: '비밀번호를 잊으셨나요?',
    en: 'Forgot password?',
  },
  [AuthMessageKey.AUTH_FORGOT_PASSWORD_TITLE]: {
    ko: '비밀번호 재설정',
    en: 'Forgot password',
  },
  [AuthMessageKey.AUTH_FORGOT_PASSWORD_DESCRIPTION_1]: {
    ko: '가입했던 이메일을 입력해주세요.',
    en: 'Enter the email you signed up with.',
  },
  [AuthMessageKey.AUTH_FORGOT_PASSWORD_DESCRIPTION_2]: {
    ko: '비밀번호 재설정 메일을 보내드립니다.',
    en: 'We’ll send you an email to reset your password.',
  },
} as const;
