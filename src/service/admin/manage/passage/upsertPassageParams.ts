import { z } from "zod"
import { zodPassageCreationSchema } from "../../../../zod/passage"

export type upsertPassageParams = z.infer<typeof zodPassageCreationSchema>

