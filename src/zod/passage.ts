import { ZodAnyDef, z } from "zod"
import { toZodSchema } from "./common";
import { Passage, EnglishLevel, EnglishLevelRange } from "@prisma/client";
import { SingleQuestion } from "../service/passage/passageType"

type PartialPassage = Pick<Passage, "englishLevelId" | "title">

export const zodPassageCreationSchema = z.object<toZodSchema<PartialPassage>>({
  englishLevelId: z.number(),
  title: z.string().min(5)
})

export const zodPassageQuestionUpsertSchema = z.object<toZodSchema<Omit<SingleQuestion, "id">>>({
  index: z.number(),
  qTitle: z.string().optional(),
  // @ts-expect-error: とりあえず
  choice: z.string().optional(),
  // @ts-expect-error: とりあえず
  answer: z.string().optional()
})