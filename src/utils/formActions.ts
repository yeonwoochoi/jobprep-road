import { ApiResult } from "@/lib/api";
import { validateRequiredFields } from "@/utils/formValidation";

export function createFormAction<T extends readonly string[], D>(
  requiredFields: T,
  fieldLabelMap: Record<T[number], string>,
  handler: (data: Record<T[number], string>) => Promise<D>
) {
  return async function action(_: any, formData: FormData): Promise<ApiResult<D | null>> {
    const validation = validateRequiredFields(formData, requiredFields, fieldLabelMap);
    if (validation.status === "error" || validation.status === "idle") {
      return validation;
    }
    try {
      const data = await handler(validation.data);
      return { status: "success", data };
    } catch (e: any) {
      return { status: "error", error: e?.message || "Unknown Error" };
    }
  }
}