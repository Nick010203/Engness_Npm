import { z } from "zod"
import { zodPassageQuestionUpsertSchema } from "../../../../zod/passage"

export type upsertPassageQuestionParams = z.infer<typeof zodPassageQuestionUpsertSchema> & { beforeIndex?: number, recordId?: number, passageId: number }