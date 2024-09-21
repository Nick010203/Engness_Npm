import { z } from "zod"
import { zodUserBasicInfoUpdateSchema } from "../../zod/user"
import { zodEmail } from "../../zod/common"

export type userBasicInfoUpdateParams = z.infer<typeof zodUserBasicInfoUpdateSchema>
export type userEmailUpdateParams = { oldEmail: z.infer<typeof zodEmail>, newEmail: z.infer<typeof zodEmail> }

type updateType = "BASIC" | "EMAIL"

export type userUpdateParams = {
  updateType: updateType;
  updateData: userBasicInfoUpdateParams | userEmailUpdateParams;
}

export type userUpdateResponse<T extends updateType> = T extends "BASIC" ? null : { newEmail: string, oldEmail: string }

export type userEmailUpdateOneTimePasswordValidationParams = {
  newEmail: string
  oldEmail: string
  oneTimePassword: string
}

export type userEmailUpdateOneTimePasswordValidationResponse = {
  isOneTimePasswordValidated: boolean
}