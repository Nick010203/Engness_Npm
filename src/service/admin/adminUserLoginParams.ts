import { z } from "zod"
import { zodAdminUserLoginSchema } from "src/zod"

export type adminUserLoginParams = z.infer<typeof zodAdminUserLoginSchema>