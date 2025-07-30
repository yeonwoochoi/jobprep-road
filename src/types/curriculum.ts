/**
 * AI가 생성하는 커리큘럼의 전체 구조
 */
export interface Curriculum {
  /**
   * 커리큘럼의 메타데이터 (이전과 동일)
   */
  metadata: {
    title: string;
    description: string;
    targetJobs: string[];
    level: 'entry' | 'junior' | 'senior'; // '신입' | '주니어' | '경력'
    createdAt: string;
  };

  /**
   * 직무에 필요한 기술 스택 트리
   */
  skillTree: {
    categoryName: string;
    description: string;
    skills: {
      name: string;
      importance: 'required' | 'recommended' | 'nice_to_have'; // '필수' | '권장' | '알아두면 좋음'
      description: string;
    }[];
  }[];

  /**
   * 추천 학습 리소스의 중앙 저장소
   */
  recommendedResources: {
    resourceId: string;
    type: 'course' | 'article' | 'book' | 'official_docs' | 'project'; // '강의' | '아티클' | '도서' | '공식문서' | '프로젝트';
    title: string;
    url: string;
    description: string;
    platform?: string;
  }[];

  /**
   * 12주간의 상세 학습 계획
   */
  weeklyPlan: {
    /**
     * 주차 (1 ~ 12)
     */
    week: number;
    /**
     * 해당 주차의 핵심 학습 목표
     * @example "React 상태 관리 마스터하기: useState와 useEffect"
     */
    title: string;
    /**
     * 해당 주차의 학습 내용에 대한 상세한 설명.
     * 왜 이 기술들을 지금 배워야 하는지, 어떤 점에 중점을 둬야 하는지를 설명합니다.
     */
    description: string;
    /**
     * 해당 주차에 학습해야 할 구체적인 주제 목록.
     * To-Do 리스트를 대체하여 더 구조적이고 상세한 가이드를 제공합니다.
     */
    learningTopics: {
      /**
       * 학습할 주제 또는 개념
       * @example "useState Hook의 기본 사용법과 주의점"
       */
      topic: string;
      /**
       * 해당 주제를 학습하기 위한 구체적인 가이드나 핵심 질문.
       * 사용자가 '무엇을' 해야 할지 명확히 제시합니다.
       */
      guideline: string;
      /**
       * 이 주제 학습에 직접적으로 도움이 되는 리소스 ID 목록 (선택 사항)
       * recommendedResources의 resourceId를 참조합니다.
       * @example ["res-002", "res-005"]
       */
      relatedResourceIds?: string[];
    }[];
    /**
     * 해당 주차 학습을 마무리하며 도전해볼 만한 과제나 프로젝트 (선택 사항)
     * 이론 학습을 실제 코드로 연결하는 역할을 합니다.
     * @example "useState와 useEffect만을 사용하여 간단한 TODOLIST 앱 만들어보기"
     */
    weeklyTask?: string;
  }[];
}