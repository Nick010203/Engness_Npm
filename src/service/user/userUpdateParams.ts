import { z } from "zod"
import { zodEmail, zodUserBasicInfoUpdateSchema } from "../../zod/user"

export type userBasicInfoUpdateParams = z.infer<typeof zodUserBasicInfoUpdateSchema>
export type userEmailUpdateParams = { email: z.infer<typeof zodEmail> }

export type userUpdateParams = {
  updateType: "BASIC" | "EMAIL"
  updateData: userBasicInfoUpdateParams | userEmailUpdateParams
}