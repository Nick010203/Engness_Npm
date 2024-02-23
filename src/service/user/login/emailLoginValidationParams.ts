export type emailLoginValidationParams = {
  userEmail: string
  oneTimePassword: string
}

export type emailLoginValidationResponse = {
  jwt: string
  isExpiredOneTimePassword: boolean
}