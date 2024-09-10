import { z } from "zod"
import { toZodSchema } from "./common";
import { Passage } from "@prisma/client";
import { SingleQuestion } from "../service/passage/passageType"

// createもするのでidはoptional
type PartialPassage = Pick<Passage, "englishLevelId" | "englishTitle" | "japaneseTitle" | "free" | "accessible"> & { id: number | null }

type PartialPassageQuestion = Omit<SingleQuestion, "index"> & { index: number | null }

export const zodPassageUpsertSchema = z.object<toZodSchema<PartialPassage>>({
  id: z.number().nullable(),
  englishLevelId: z.number(),
  englishTitle: z.string(),
  japaneseTitle: z.string(),
  free: z.boolean(),
  accessible: z.boolean()
})

export const zodPassageQuestionUpsertSchema = z.object<toZodSchema<PartialPassageQuestion>>({
  index: z.number().nullable(),
  qTitle: z.string().optional(),
  // @ts-expect-error: とりあえず
  choice: z.string().optional(),
  answer: z.string().optional(),
  explanation: z.string().optional(),
})