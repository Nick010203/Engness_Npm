import { z } from "zod"
import { zodEmail, zodUserBasicInfoUpdateSchema } from "../../zod/user"

export type userBasicInfoUpdateParams = z.infer<typeof zodUserBasicInfoUpdateSchema>
export type userEmailUpdateParams = { email: z.infer<typeof zodEmail> }
export type userPasswordUpdateParams = { oldPassword: string, newPassword: string }


export type userUpdateParams = {
  updateType: "BASIC" | "EMAIL" | "PASSWORD"
  updateData: userBasicInfoUpdateParams | userEmailUpdateParams | userPasswordUpdateParams
}