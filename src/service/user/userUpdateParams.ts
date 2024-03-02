import { z } from "zod"
import { zodUserBasicInfoUpdateSchema } from "../../zod/user"
import { zodEmail } from "../../zod/common"

export type userBasicInfoUpdateParams = z.infer<typeof zodUserBasicInfoUpdateSchema>
export type userEmailUpdateParams = { email: z.infer<typeof zodEmail> }

export type userUpdateParams = {
  updateType: "BASIC" | "EMAIL"
  updateData: userBasicInfoUpdateParams | userEmailUpdateParams
}