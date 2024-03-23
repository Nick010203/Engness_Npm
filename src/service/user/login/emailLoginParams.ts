import { z } from "zod"
import { zodEmailLoginSchema } from "../../../zod/user"
import { userDataForFront } from "../userDataForFront"

export type emailLoginPrepareParams = z.infer<typeof zodEmailLoginSchema>

export type emailLoginParams = z.infer<typeof zodEmailLoginSchema>
export type emailLoginResponse = userDataForFront
