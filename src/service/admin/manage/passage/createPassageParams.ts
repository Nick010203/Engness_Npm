import { z } from "zod"
import { zodPassageCreationSchema } from "src/zod/passage"

export type createPassageParams = z.infer<typeof zodPassageCreationSchema>

