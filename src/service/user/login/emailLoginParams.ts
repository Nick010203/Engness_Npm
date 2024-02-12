import { z } from "zod"
import { zodUserLoginSchema } from "../../../zod/user"

export type userLoginParams = z.infer<typeof zodUserLoginSchema>