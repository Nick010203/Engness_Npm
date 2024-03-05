import { z } from "zod"
import { zodAdminUserLoginSchema } from "src/zod/admin"

export type loginAdminUserParams = z.infer<typeof zodAdminUserLoginSchema>