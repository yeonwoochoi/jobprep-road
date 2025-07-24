import { validateRequiredFields } from "@/utils/formValidation";
import { getErrorMessage } from "@/utils/error";

export type FormActionResult<T> =
  | { status: 'idle' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: string }

export function createFormAction<T extends readonly string[], D>(
  requiredFields: T,
  fieldLabelMap: Record<T[number], string>,
  handler: (data: Record<T[number], string>) => Promise<D>
) {
  return async function action(_: any, formData: FormData): Promise<FormActionResult<D | null>> {
    try {
      const validation = validateRequiredFields(formData, requiredFields, fieldLabelMap);
      const data = await handler(validation);
      return { status: "success", data };
    } catch (e: any) {
      return { status: "error", error: getErrorMessage(e) };
    }
  }
}