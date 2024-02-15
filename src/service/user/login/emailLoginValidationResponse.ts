
export type emailLoginValidationResponse = {
  jwt: string
  isExpiredOneTimePassword: boolean
}