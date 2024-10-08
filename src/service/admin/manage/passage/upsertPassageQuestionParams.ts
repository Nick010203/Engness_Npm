import { z } from "zod"
import { zodPassageQuestionUpsertSchema } from "../../../../zod/passage"

export type upsertPassageQuestionParams = z.infer<typeof zodPassageQuestionUpsertSchema> & { oldIndex: number | null, recordId: number | null, passageId: number }