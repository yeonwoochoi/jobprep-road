import mammoth from 'mammoth';
import pdf from 'pdf-parse';
import { parseHwpWithLibrary } from '@/lib/hwpParser';

export async function parseFilesToText(files: File[]): Promise<string> {
  let combinedText = '';
  for (const file of files) {
    const arrayBuffer = await file.arrayBuffer();
    let text = '';

    try {
      // HWP 파일 처리
      if (file.name.toLowerCase().endsWith('.hwp')) {
        const result = parseHwpWithLibrary(arrayBuffer);
        if (result.success) {
          text = result.text;
        } else {
          // 파싱 실패 시 에러를 발생시켜 catch 블록에서 처리하도록 함
          throw new Error(result.error || '알 수 없는 HWP 파일 파싱 오류');
        }
      }
      // PDF 파일 처리
      else if (file.type === 'application/pdf') {
        const buffer = Buffer.from(arrayBuffer);
        const data = await pdf(buffer);
        text = data.text;
      }
      // DOCX 파일 처리
      else if (
        file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ) {
        const buffer = Buffer.from(arrayBuffer);
        const result = await mammoth.extractRawText({ buffer });
        text = result.value;
      }
      // 일반 텍스트 파일 처리
      else if (file.type === 'text/plain') {
        const buffer = Buffer.from(arrayBuffer);
        text = buffer.toString('utf-8');
      }
      // 지원하지 않는 파일 형식
      else {
        text = `지원하지 않는 파일 형식입니다: ${file.type || file.name}`;
      }

      combinedText += `\n\n--- 다음 파일: ${file.name} ---\n\n${text}`;
    } catch (error) {
      console.error(`Error parsing file ${file.name}:`, error);
      const errorMessage = error instanceof Error ? error.message : String(error);
      combinedText += `\n\n--- 파일 파싱 오류: ${file.name} (${errorMessage}) ---`;
    }
  }

  return combinedText.trim();
}
