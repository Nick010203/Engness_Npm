import { z } from "zod"
import { zodUserCreationSchema } from "../../zod/user"

export type userCreationParams = z.infer<typeof zodUserCreationSchema>