import { userDataForFront } from "../userDataForFront"
export type emailLoginValidationParams = {
  email: string
  oneTimePassword: string
}

export type emailLoginValidationResponse = { userData: userDataForFront & { jwt: string }, isExpiredOneTimePassword: boolean }