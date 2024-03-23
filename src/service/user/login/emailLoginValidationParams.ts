export type emailLoginValidationParams = {
  email: string
  oneTimePassword: string
}

export type emailLoginValidationResponse = { isExpiredOneTimePassword: boolean }