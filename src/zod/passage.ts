import { ZodAnyDef, z } from "zod"
import { toZodSchema } from "./common";
import { Passage, EnglishLevel, EnglishLevelRange } from "@prisma/client";
import { SingleQuestion } from "../service/passage/passageType"

// createもするのでidはoptional
type PartialPassage = Pick<Passage, "englishLevelId" | "title" | "free" | "public"> & { id: number | null }

export const zodPassageCreationSchema = z.object<toZodSchema<PartialPassage>>({
  id: z.number(),
  englishLevelId: z.number(),
  title: z.string().min(5),
  free: z.boolean(),
  public: z.boolean()
})

export const zodPassageQuestionUpsertSchema = z.object<toZodSchema<SingleQuestion>>({
  index: z.number(),
  qTitle: z.string().optional(),
  // @ts-expect-error: とりあえず
  choice: z.string().optional(),
  // @ts-expect-error: とりあえず
  answer: z.string().optional()
})