export interface UserData {
  email: string
  password: string
  firstName: string
  lastName: string
}

export interface LoginData {
  email: string
  password: string
}

export interface SendVerificationCodeData {
  email: string
}

export interface VerificationCodeData extends SendVerificationCodeData {
  token: string
}

export interface ResetPasswordData extends VerificationCodeData {
  password: string
}