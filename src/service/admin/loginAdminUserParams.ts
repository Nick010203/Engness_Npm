import { z } from "zod"
import { zodAdminUserLoginSchema } from "../../zod/admin"
import { adminUserDataForFront } from "./adminUserDataForFront"

export type loginAdminUserParams = z.infer<typeof zodAdminUserLoginSchema>

export type loginAdminUserResponse = adminUserDataForFront