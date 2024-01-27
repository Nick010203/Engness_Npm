import { z } from "zod"
import { zodEmail, zodUserBasicInfoUpdateSchema } from "../../zod/user"

type userBasicInfoUpdateParams = z.infer<typeof zodUserBasicInfoUpdateSchema>
type userEmailUpdateParams = z.infer<typeof zodEmail>
type userPasswordUpdateParams = { oldPassword: string, newPassword: string }


export type userUpdateParams = {
  updateType: "BASIC" | "EMAIL" | ""
  data: userBasicInfoUpdateParams | userEmailUpdateParams | userPasswordUpdateParams
}