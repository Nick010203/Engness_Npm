import { z } from "zod"
import { zodEmailLoginSchema } from "../../../zod/user"
import { sessionDataForFront } from "../userDataForFront"

export type emailLoginPrepareParams = z.infer<typeof zodEmailLoginSchema>

export type emailLoginValidationParams = {
  email: string
  oneTimePassword: string
}
export type emailLoginValidationResponse = { isExpiredOneTimePassword: boolean }

export type emailLoginParams = z.infer<typeof zodEmailLoginSchema>
export type emailLoginResponse = sessionDataForFront
