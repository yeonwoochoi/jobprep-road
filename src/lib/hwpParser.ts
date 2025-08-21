import { parse } from 'hwp.js'
import HWPDocument from 'hwp.js/build/models/document'
import Section from 'hwp.js/build/models/section'
import Paragraph from 'hwp.js/build/models/paragraph'
import HWPChar from 'hwp.js/build/models/char'

function extractTextFromDocument(hwpDocument: HWPDocument): string {
  // 모든 섹션을 순회하며 텍스트를 조합
  return hwpDocument.sections
    .map(
      (section: Section) =>
        section.content
          .map((paragraph: Paragraph) => {
            return paragraph.content
              .map((char: HWPChar) => {
                // HWPChar의 value가 실제 텍스트 또는 제어 문자 코드
                // 값이 string이면 일반 텍스트
                if (typeof char.value === 'string') {
                  return char.value
                }

                // 값이 number이면 제어 문자 코드
                // 13: 문단 끝(Carriage Return), 10: 줄 바꿈(Line Feed)
                if (char.value === 13 || char.value === 10) {
                  return '\n'
                }

                // 그 외 텍스트로 표현되지 않는 제어 문자는 무시
                // (예: 표, 그림 등의 컨트롤 시작/끝)
                return ''
              })
              .join('')
          })
          .join('') // 문단과 문단은 이미 \n으로 구분되므로 추가 join 문자는 생략
    )
    .join('') // 섹션과 섹션 사이도 마찬가지
}

export type ParseHwpResult =
  | { success: true; text: string; document: HWPDocument }
  | { success: false; error: string }

/**
 * hwp.js 라이브러리를 사용하여 HWP 파일을 파싱하는 메인 함수
 * @param fileBuffer HWP 파일의 ArrayBuffer
 * @returns 추출된 텍스트와 원본 파싱 데이터
 */
export const parseHwpWithLibrary = (fileBuffer: ArrayBuffer): ParseHwpResult => {
  try {
    // Uint8Array로 변환 후 hwp.js의 parse 함수 호출
    const data = new Uint8Array(fileBuffer)
    const hwpDocument = parse(data, { type: 'binary' })

    // 파싱된 문서 객체에서 텍스트만 추출
    const text = extractTextFromDocument(hwpDocument)

    return {
      success: true,
      text,
      document: hwpDocument, // 필요하다면 hwp.js가 파싱한 전체 데이터에 접근할 수 있도록 반환
    }
  } catch (error) {
    console.error('HWP parsing failed:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : String(error),
    }
  }
}
