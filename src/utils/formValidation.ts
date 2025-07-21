import { ApiResult } from "@/lib/api";

export type RequiredFields = readonly string[]

export function validateRequiredFields<T extends RequiredFields>(
  formData: FormData,
  requiredFields: T,
  fieldLabelMap: Record<T[number], string>
): ApiResult<Record<T[number], string>> {
  const data = Object.fromEntries(
    requiredFields.map((key) => [key, formData.get(key)?.toString().trim()])
  ) as Record<T[number], string | undefined>

  for (const key of requiredFields) {
    if (!data[key]) {
      return {
        status: 'error',
        error: `Please input ${fieldLabelMap[key]}.`,
      }
    }
  }

  return {
    status: 'success',
    data: data as Record<T[number], string>,
  }
}
