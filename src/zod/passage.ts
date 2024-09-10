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
  qTitle: z.string(),
  // @ts-expect-error: とりあえず
  choice: z.string(),
  answer: z.string(),
  explanation: z.string(),
  answerBoxHeight: z.enum(answerBoxHeight)
})