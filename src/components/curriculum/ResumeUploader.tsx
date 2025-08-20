'use client';

import { useCallback, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Locale, t } from '@/locale';
import { MessageKey } from '@/locale/message';
import { DragEvent, ChangeEvent } from 'react';
import clsx from 'clsx';
import { CloudUpload, FileText, XCircle } from 'lucide-react';
import LocaleText from '@/components/common/LocaleText';

interface ResumeUploaderProps {
  uploadedFiles: File[];
  onAddFiles: (files: File[]) => void;
  onRemoveFile: (file: File) => void;
}

export default function ResumeUploader({
  uploadedFiles,
  onAddFiles,
  onRemoveFile,
}: ResumeUploaderProps) {
  const [isDragging, setIsDragging] = useState(false);
  const { language } = useLanguage();

  const handleFiles = useCallback(
    (files: FileList | null) => {
      if (!files || files.length === 0) return;

      const allowedExtensions = ['pdf', 'docx', 'hwp', 'txt'];

      const validFiles = Array.from(files).filter((file) => {
        const fileExtension = file.name.split('.').pop()?.toLowerCase();
        return fileExtension && allowedExtensions.includes(fileExtension);
      });

      if (validFiles.length !== files.length) {
        alert(t(MessageKey.GENERATE_FILE_UNSUPPORTED_ALERT, language));
      }

      if (validFiles.length > 0) {
        onAddFiles(validFiles);
      }
    },
    [onAddFiles, language]
  );

  // 드래그가 업로드 영역에 진입했을 때 (UI를 드래그 상태로 변경)
  const handleDragEnter = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  // 드래그가 업로드 영역에서 벗어났을 때 (드래그 상태 해제)
  const handleDragLeave = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  // 드래그가 업로드 영역 위에 머무는 동안 (기본 이벤트 막아야 drop 가능)
  const handleDragOver = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  // 드래그된 파일이 업로드 영역에 드롭되었을 때 (파일 처리)
  const handleDrop = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  }, []);

  const handleFileInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      handleFiles(e.target.files);
      // 동일한 파일을 연속으로 업로드할 수 있도록 input의 value를 초기화
      e.target.value = '';
    },
    [handleFiles]
  );

  return (
    <>
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        className={clsx(
          'rounded-xl border-2 border-dashed p-8 text-center transition-all duration-200',
          isDragging ? 'border-neutral-600 bg-neutral-50' : 'border-neutral-300'
        )}
      >
        <input
          type="file"
          id="file-input"
          className="hidden"
          accept=".pdf,.docx,.hwp,.txt"
          multiple
          onChange={handleFileInputChange}
        />
        <label htmlFor="file-input" className="cursor-pointer">
          <CloudUpload className="mx-auto mb-4 h-10 w-10 text-neutral-400" />
          <p className="mb-2 text-neutral-600">
            <LocaleText keyOrLocaleData={MessageKey.GENERATE_FILE_DROPZONE_TEXT_1} />
          </p>
          <span className="inline-block rounded-lg bg-neutral-800 px-5 py-2 font-semibold text-white transition-colors hover:bg-neutral-700">
            <LocaleText keyOrLocaleData={MessageKey.GENERATE_FILE_DROPZONE_BUTTON} />
          </span>
        </label>
        {uploadedFiles.length > 0 && (
          <div className="mt-6 space-y-4">
            {uploadedFiles.map((file, index) => (
              <div
                key={`${file.name}-${file.lastModified}-${index}`}
                className="flex items-center justify-between rounded-lg bg-neutral-100 p-3 text-left"
              >
                <div className="flex min-w-0 items-center overflow-hidden">
                  <FileText className="mr-3 h-5 w-5 flex-shrink-0 text-neutral-600" />
                  <span className="truncate font-medium text-neutral-800" title={file.name}>
                    {file.name}
                  </span>
                  <span className="ml-2 flex-shrink-0 text-sm text-neutral-500">
                    ({(file.size / 1024).toFixed(1)} KB)
                  </span>
                </div>
                <button
                  onClick={() => onRemoveFile(file)}
                  className="ml-4 text-neutral-500 transition-colors hover:text-red-500"
                  aria-label={`${file.name} 파일 삭제`}
                >
                  <XCircle className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-4 space-y-1 text-center text-sm text-neutral-500">
        <p>
          <LocaleText keyOrLocaleData={MessageKey.GENERATE_FILE_HELPER_TEXT_1} />
        </p>
        <p>
          <LocaleText keyOrLocaleData={MessageKey.GENERATE_FILE_HELPER_TEXT_2} />
        </p>
        <p className="mt-2 text-xs text-neutral-400">
          <LocaleText keyOrLocaleData={MessageKey.GENERATE_FILE_SUPPORTED_FORMATS} />
        </p>
      </div>
    </>
  );
}
