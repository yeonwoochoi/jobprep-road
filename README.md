
# 취준로드 (Job-prep Road)

## 프로젝트 개요
- 업종 및 직무를 선택한 취준생에게 기업 요구사항을 분석해 맞춤형 취업 준비 커리큘럼을 AI 기반으로 자동 생성하는 서비스
- IT 직군 중심, 향후 타 업종 확장 가능

## 주요 기능
- 사용자 인증 (이메일, Google/GitHub OAuth)
- 업종/직무 태그 선택 및 다중 선택 지원
- AI(GPT-4) 기반 커리큘럼 자동 생성 (필수 스킬, 학습 로드맵, 추천 리소스)
- 커리큘럼 저장, 공유, PDF 내보내기
- 관리자용 크롤링 데이터 관리 및 AI 설정 대시보드

## 기술 스택
- 프론트엔드: Next.js (App Router), TailwindCSS
- 백엔드: Next.js API Routes, NextAuth.js (인증)
- 데이터베이스: PostgreSQL + Prisma ORM
- AI 연동: OpenAI GPT-4 API
- 배포: Vercel

## 시작하기

### 설치 및 실행

```bash
npm install
npm run dev
```

### 환경 변수 설정 (`.env.local`)

```
DATABASE_URL=postgresql://...
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_secret
GOOGLE_CLIENT_ID=...
GOOGLE_CLIENT_SECRET=...
GITHUB_ID=...
GITHUB_SECRET=...
OPENAI_API_KEY=...
```

### 데이터베이스 마이그레이션

```bash
npx prisma migrate dev --name init
```

## 프로젝트 구조

- `/app` : Next.js App Router 기반 페이지
- `/components` : 재사용 가능한 UI 컴포넌트
- `/lib` : Prisma, 인증, GPT API 헬퍼 등
- `/store` : Zustand 상태 관리

## 개발 및 배포

- Vercel 연동 자동 배포 지원
- ESLint 및 TailwindCSS 적용된 코드 스타일 유지

---

## 참고

본 프로젝트는 MVP 개발을 목표로 하며, 사용자 피드백에 따라 기능 확장 예정입니다.