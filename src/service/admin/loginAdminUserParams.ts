import { z } from "zod"
import { zodAdminUserLoginSchema } from "../../zod/admin"

export type loginAdminUserParams = z.infer<typeof zodAdminUserLoginSchema>

export type loginAdminUserResponse = {
  jwt: string
}