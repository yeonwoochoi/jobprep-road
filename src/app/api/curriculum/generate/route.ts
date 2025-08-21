import { NextRequest, NextResponse } from 'next/server'
import { GoogleGenerativeAI } from '@google/generative-ai'
import { parseFilesToText } from '@/lib/parser'
import { generateCurriculumPrompt } from '@/lib/prompt'
import { Curriculum } from '@/types/curriculum'

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '')

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()
    const industry = formData.get('industry') as string
    const targetJobsString = formData.get('targetJobs') as string
    const files = formData.getAll('files') as File[]

    if (!industry || !targetJobsString || files.length === 0) {
      return NextResponse.json(
        { error: '업종, 직무, 파일은 필수 입력 항목입니다.' },
        {
          status: 400,
          statusText: 'Bad Request',
          headers: { 'Content-Type': 'application/json' },
        }
      )
    }

    const targetJobs = JSON.parse(targetJobsString)
    const resumeText = await parseFilesToText(files)
    if (!resumeText) {
      return NextResponse.json(
        { error: '첨부한 파일에서 텍스트를 추출할 수 없습니다.' },
        {
          status: 400,
          statusText: 'Bad Request',
          headers: { 'Content-Type': 'application/json' },
        }
      )
    }

    const prompt = await generateCurriculumPrompt({
      industry,
      targetJobs,
      resumeText,
    })

    const model = genAI.getGenerativeModel({
      model: 'gemini-2.5-flash',
    })

    const result = await model.generateContent(prompt)
    const response = result.response
    const jsonContent = response.text()

    if (!jsonContent) {
      throw new Error('AI로부터 받은 응답 내용이 비어 있습니다.')
    }

    // Gemini는 OpenAI의 JSON 모드처럼 형식을 100% 보장하지 않으므로, 프롬프트의 지시사항이 매우 중요
    // 때로는 마크다운(` ```json ... ``` `)으로 감싸서 반환할 수 있으므로, 이를 제거하는 로직이 필요할 수 있다.
    const cleanedJsonContent = jsonContent.replace(/^```json\s*/, '').replace(/```$/, '')

    const curriculumData = JSON.parse(cleanedJsonContent) as Curriculum

    // TODO: DB 저장 로직

    return NextResponse.json(
      {
        success: true,
        message: '커리큘럼이 성공적으로 생성되었습니다.',
        data: curriculumData,
      },
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('[API_GENERATE_ERROR]', error)
    return NextResponse.json(
      { error: '내부 오류로 커리큘럼을 생성하지 못했습니다.' },
      {
        status: 500,
        statusText: 'Internal Server Error',
        headers: { 'Content-Type': 'application/json' },
      }
    )
  }
}
