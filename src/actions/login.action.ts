"use server"

import { ApiResult } from "@/lib/api";
import { UserData } from "@/types/types";

// TODO
export async function loginAction(_: any, formData: FormData): Promise<ApiResult<UserData | null>> {
  const email = formData.get("email")?.toString()
  const password = formData.get("password")?.toString()

  if (!email) {
    return {
      status: "error",
      error: "이메일을 입력해주세요"
    }
  }
  else if (!password) {
    return {
      status: "error",
      error: "비밀번호를 입력해주세요"
    }
  }

  try {
    return {
      status: "success",
      data: null
    }
  } catch (e) {
    return {
      status: "error",
      error: "비밀번호를 입력해주세요"
    }
  }
}