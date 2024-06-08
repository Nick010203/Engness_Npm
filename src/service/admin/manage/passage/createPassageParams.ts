import { z } from "zod"
import { zodPassageCreationSchema } from "../../../../zod/passage"

export type createPassageParams = z.infer<typeof zodPassageCreationSchema>

