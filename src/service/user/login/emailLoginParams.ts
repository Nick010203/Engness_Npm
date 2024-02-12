import { z } from "zod"
import { zodEmailLoginSchema } from "../../../zod/user"

export type emailLoginParams = z.infer<typeof zodEmailLoginSchema>