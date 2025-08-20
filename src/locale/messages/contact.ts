import { LocaleData } from '@/locale/message';

export enum ContactMessageKey {
  FEEDBACK_SECTION_EYEBROW = 'FEEDBACK_SECTION_EYEBROW',
  FEEDBACK_SECTION_TITLE = 'FEEDBACK_SECTION_TITLE',
  FEEDBACK_SECTION_DESCRIPTION = 'FEEDBACK_SECTION_DESCRIPTION',

  FEEDBACK_GUIDE_TITLE = 'FEEDBACK_GUIDE_TITLE',
  FEEDBACK_GUIDE_BUG_REPORT_TITLE = 'FEEDBACK_GUIDE_BUG_REPORT_TITLE',
  FEEDBACK_GUIDE_BUG_REPORT_EXAMPLE_1 = 'FEEDBACK_GUIDE_BUG_REPORT_EXAMPLE_1',
  FEEDBACK_GUIDE_BUG_REPORT_EXAMPLE_2 = 'FEEDBACK_GUIDE_BUG_REPORT_EXAMPLE_2',
  FEEDBACK_GUIDE_IDEA_PROPOSAL_TITLE = 'FEEDBACK_GUIDE_IDEA_PROPOSAL_TITLE',
  FEEDBACK_GUIDE_IDEA_PROPOSAL_EXAMPLE = 'FEEDBACK_GUIDE_IDEA_PROPOSAL_EXAMPLE',
  FEEDBACK_DIRECT_CONTACT_TITLE = 'FEEDBACK_DIRECT_CONTACT_TITLE',

  // 폼: 피드백 유형
  FEEDBACK_TYPE_IDEA = 'FEEDBACK_TYPE_IDEA',
  FEEDBACK_TYPE_BUG = 'FEEDBACK_TYPE_BUG',
  FEEDBACK_TYPE_CONTENT = 'FEEDBACK_TYPE_CONTENT',
  FEEDBACK_TYPE_ETC = 'FEEDBACK_TYPE_ETC',

  FEEDBACK_SUBMIT_BUTTON_TEXT = 'FEEDBACK_SUBMIT_BUTTON_TEXT',
  FEEDBACK_FORM_TYPE_TITLE = 'FEEDBACK_FORM_TYPE_TITLE',
  FEEDBACK_FORM_TYPE_LABEL = 'FEEDBACK_FORM_TYPE_LABEL',
  FEEDBACK_FORM_TITLE_LABEL = 'FEEDBACK_FORM_TITLE_LABEL',
  FEEDBACK_FORM_MESSAGE_LABEL = 'FEEDBACK_FORM_MESSAGE_LABEL',

  FEEDBACK_SUBMIT_SUCCESS = 'FEEDBACK_SUBMIT_SUCCESS',
}

export const contactMessages: LocaleData = {
  FEEDBACK_SECTION_EYEBROW: {
    ko: '피드백',
    en: 'Feedback',
  },
  FEEDBACK_SECTION_TITLE: {
    ko: '더 나은 서비스를 위해 여러분의 의견을 들려주세요.',
    en: 'We’d love to hear your thoughts.',
  },
  FEEDBACK_SECTION_DESCRIPTION: {
    ko: '서비스 개선을 위한 아이디어가 있다면 알려주세요. 여러분의 목소리가 더 나은 서비스를 만듭니다.',
    en: "Have an idea or a suggestion? We're listening. Your feedback helps us build a better experience.",
  },
  FEEDBACK_GUIDE_TITLE: {
    ko: '이렇게 작성해주시면 더 좋아요!',
    en: 'Here’s how to write a great feedback!',
  },
  FEEDBACK_GUIDE_BUG_REPORT_TITLE: {
    ko: '버그 신고 예시',
    en: 'Bug Report Example',
  },
  FEEDBACK_GUIDE_BUG_REPORT_EXAMPLE_1: {
    ko: "결제 페이지에서 '다음' 버튼을 누르면 흰 화면만 보입니다.",
    en: "On the payment page, pressing the 'Next' button only shows a white screen.",
  },
  FEEDBACK_GUIDE_BUG_REPORT_EXAMPLE_2: {
    ko: '(브라우저: Chrome, 기기: PC)',
    en: '(Browser: Chrome, Device: PC)',
  },
  FEEDBACK_GUIDE_IDEA_PROPOSAL_TITLE: {
    ko: '아이디어 제안 예시',
    en: 'Idea Proposal Example',
  },
  FEEDBACK_GUIDE_IDEA_PROPOSAL_EXAMPLE: {
    ko: "프로젝트 관리 페이지에 '마감일 순 정렬' 기능이 추가되면 좋겠습니다.",
    en: "I wish there was a 'Sort by due date' feature on the project management page.",
  },
  FEEDBACK_DIRECT_CONTACT_TITLE: {
    ko: '직접 문의하기',
    en: 'Contact Us Directly',
  },

  // 피드백 유형
  FEEDBACK_TYPE_IDEA: { ko: '아이디어 제안', en: 'Idea' },
  FEEDBACK_TYPE_BUG: { ko: '버그 신고', en: 'Bug Report' },
  FEEDBACK_TYPE_CONTENT: { ko: '콘텐츠 요청', en: 'Content Request' },
  FEEDBACK_TYPE_ETC: { ko: '기타 의견', en: 'Etc.' },

  FEEDBACK_FORM_TYPE_TITLE: {
    ko: '피드백 작성하기',
    en: 'Leave your feedback',
  },
  FEEDBACK_FORM_TYPE_LABEL: { ko: '피드백 유형', en: 'Feedback Type' },
  FEEDBACK_FORM_TITLE_LABEL: { ko: '제목', en: 'Title' },
  FEEDBACK_FORM_MESSAGE_LABEL: { ko: '상세 내용', en: 'Details' },

  FEEDBACK_SUBMIT_BUTTON_TEXT: { ko: '의견 보내기', en: 'Send Feedback' },

  FEEDBACK_SUBMIT_SUCCESS: {
    ko: '소중한 의견 감사합니다.',
    en: 'Thank you for your feedback.',
  },
} as const;
