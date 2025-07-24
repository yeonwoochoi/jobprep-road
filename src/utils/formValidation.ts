export type RequiredFields = readonly string[]

export function validateRequiredFields<T extends RequiredFields>(
  formData: FormData,
  requiredFields: T,
  fieldLabelMap: Record<T[number], string>
): Record<T[number], string> {
  const data = Object.fromEntries(
    requiredFields.map((key) => [key, formData.get(key)?.toString().trim()])
  ) as Record<T[number], string | undefined>

  for (const key of requiredFields) {
    if (!data[key as T[number]]) {
      throw new Error(`Please input ${fieldLabelMap[key as T[number]]}.`)
    }
  }
  return data as Record<T[number], string>
}
