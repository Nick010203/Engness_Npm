import { z } from "zod"
import { zodPassageQuestionCreateAndUpdateSchema } from "../../../../zod/passage"

export type createAndUpdatePassageQuestionParams = z.infer<typeof zodPassageQuestionCreateAndUpdateSchema>