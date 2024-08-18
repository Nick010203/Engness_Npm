import { z } from "zod"
import { zodPassageUpsertSchema } from "../../../../zod/passage"

export type upsertPassageParams = z.infer<typeof zodPassageUpsertSchema>

