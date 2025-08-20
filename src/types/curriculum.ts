// === Level, Importance, ResourceType Enum ===

/**
 * 커리큘럼 대상 학습자 레벨
 * - entry: 신입
 * - junior: 주니어
 * - senior: 경력
 */
export type Level = 'entry' | 'junior' | 'senior';

/**
 * 기술 또는 학습 주제의 중요도
 * - required: 필수
 * - recommended: 권장
 * - nice_to_have: 알아두면 좋음
 */
export type Importance = 'required' | 'recommended' | 'nice_to_have';

/**
 * 학습 리소스 유형
 * - course: 강의
 * - article: 아티클/블로그
 * - book: 도서
 * - official_docs: 공식문서
 * - project: 실습/프로젝트
 */
export type ResourceType = 'course' | 'article' | 'book' | 'official_docs' | 'project';

// === Metadata ===

/**
 * 커리큘럼 기본 정보
 * - 커리큘럼의 제목, 설명, 대상 직무 및 생성 시점
 */
export interface CurriculumMeta {
  /** 커리큘럼 제목 */
  title: string;
  /** 커리큘럼 설명 */
  description: string;
  /** 대상 직무 목록 (예: ['프론트엔드 개발자', '데이터 분석가']) */
  targetJobs: string[];
  /** 추천 학습 레벨 */
  level: Level;
  /** 생성일 (ISO 8601 문자열) */
  createdAt: string;
}

// === Skill ===

/**
 * 특정 기술에 대한 정보
 */
export interface Skill {
  /** 기술 이름 (예: 'React', 'SQL') */
  name: string;
  /** 기술의 중요도 */
  importance: Importance;
  /** 기술에 대한 설명 */
  description: string;
}

/**
 * 기술 카테고리 단위
 * - 예: '프론트엔드', '데이터베이스'
 */
export interface SkillCategory {
  /** 카테고리 이름 */
  categoryName: string;
  /** 카테고리에 대한 설명 */
  description: string;
  /** 카테고리 내 기술 목록 */
  skills: Skill[];
}

// === Recommended Resource ===

/**
 * 학습 리소스 정보
 * - 강의, 도서, 문서 등
 */
export interface RecommendedResource {
  /** 리소스 고유 ID (weeklyPlan과 연결할 때 사용) */
  resourceId: string;
  /** 리소스 유형 */
  type: ResourceType;
  /** 리소스 제목 */
  title: string;
  /** 리소스 URL */
  url: string;
  /** 리소스 설명 */
  description: string;
  /** 플랫폼 정보 (예: '인프런', 'Udemy') */
  platform?: string;
}

// === Weekly Plan ===

/**
 * 주차별 학습 주제
 */
export interface LearningTopic {
  /** 학습할 주제 */
  topic: string;
  /** 학습 가이드 또는 핵심 질문 */
  guideline: string;
  /** 관련 리소스 ID 목록 (recommendedResources 참조) */
  relatedResourceIds?: string[];
}

/**
 * 주차별 학습 계획
 * - 핵심 목표, 상세 설명, 학습 주제, 과제를 포함
 */
export interface WeeklyPlan {
  /** 주차 (1~12) */
  week: number;
  /** 주차별 학습 목표 */
  title: string;
  /** 상세 설명 (왜 배우는지, 어떤 점에 집중해야 하는지) */
  description: string;
  /** 학습 주제 목록 */
  learningTopics: LearningTopic[];
  /** 주차별 과제 또는 프로젝트 */
  weeklyTask?: string;
}

// === Curriculum ===

/**
 * AI가 생성하는 커리큘럼 전체 구조
 * - 메타데이터
 * - 기술 스택 트리
 * - 추천 학습 리소스
 * - 12주간 학습 계획
 */
export interface Curriculum {
  /** 커리큘럼 메타데이터 */
  metadata: CurriculumMeta;
  /** 직무 기술 스택 트리 */
  skillTree: SkillCategory[];
  /** 추천 학습 리소스 */
  recommendedResources: RecommendedResource[];
  /** 주차별 학습 계획 */
  weeklyPlan: WeeklyPlan[];
}
