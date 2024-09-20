import { z } from "zod"
import { zodUserBasicInfoUpdateSchema } from "../../zod/user"
import { zodEmail } from "../../zod/common"

export type userBasicInfoUpdateParams = z.infer<typeof zodUserBasicInfoUpdateSchema>
export type userEmailUpdateParams = { oldEmail: z.infer<typeof zodEmail>, newEmail: z.infer<typeof zodEmail> }

export type userUpdateParams<T extends "BASIC" | "EMAIL"> = {
  updateType: T
  updateData: T extends "BASIC" ? userBasicInfoUpdateParams : userEmailUpdateParams
}