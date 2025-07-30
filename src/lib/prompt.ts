// 프롬프트 생성 함수에 필요한 인자들의 타입을 정의
import path from "path";
import { promises as fs } from 'fs';

interface PromptGenerateParams {
  industry: string
  targetJobs: string[]
  resumeText: string
}

export async function generateCurriculumPrompt({ industry, targetJobs, resumeText }: PromptGenerateParams): Promise<string> {
  // 1. 스키마 파일(types/curriculum.ts)의 경로를 지정하고 내용을 읽어온다.
  const schemaPath = path.join(process.cwd(), 'src', 'types', 'curriculum.ts') // process.cwd()는 프로젝트 루트 디렉토리
  const schemaString = await fs.readFile(schemaPath, 'utf-8')

  // 2. 프롬프트 템플릿 파일의 경로를 지정하고 내용을 읽어온다
  const templatePath = path.join(process.cwd(), 'src', 'lib', 'prompt', 'templates', 'curriculum-prompt-template.md');
  let template = await fs.readFile(templatePath, 'utf-8');

  // 3. 템플릿의 플레이스홀더를 실제 데이터로 교체한다.
  template = template
    .replaceAll('{{INDUSTRY}}', industry)
    .replaceAll('{{TARGET_JOBS}}', targetJobs.join(', '))
    .replaceAll('{{RESUME_TEXT}}', resumeText)
    .replaceAll('{{SCHEMA_STRING}}', schemaString);

  return template
}