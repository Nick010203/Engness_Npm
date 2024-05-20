import { z } from "zod"
import { zodUserCreationSchema } from "../../zod/user"
import { sessionDataForFront } from "./userDataForFront"

export type userCreationParams = z.infer<typeof zodUserCreationSchema>

export type userActivationResponse = sessionDataForFront