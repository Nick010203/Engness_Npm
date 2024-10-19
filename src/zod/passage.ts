import { z } from "zod"
import { toZodSchema } from "./common";
import { Passage } from "@prisma/client";
import { SingleQuestion, answerBoxHeight } from "../service/passage/passageType"

// createもするのでidはoptional
type PartialPassage = Pick<Passage, "englishLevelId" | "englishTitle" | "japaneseTitle" | "free" | "accessible"> & { id: number | null }

export const zodPassageUpsertSchema = z.object<toZodSchema<PartialPassage>>({
  id: z.number().nullable(),
  englishLevelId: z.number(),
  englishTitle: z.string(),
  japaneseTitle: z.string(),
  free: z.boolean(),
  accessible: z.boolean()
})

export const zodPassageQuestionUpsertSchema = z.object<toZodSchema<SingleQuestion>>({
  index: z.number(),
  pageBreak: z.boolean(),
  qTitle: z.string(),
  choice: z.array(z.union([z.string(), z.number()])),
  answer: z.string(),
  explanation: z.string(),
  answerBoxHeight: z.enum(answerBoxHeight)
})