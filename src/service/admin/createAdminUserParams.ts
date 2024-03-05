import { z } from "zod"
import { zodAdminUserCreateSchema } from "../../zod/admin"

export type createAdminUserParams = z.infer<typeof zodAdminUserCreateSchema>