import { z } from "zod"
import { toZodSchema } from "./common";
import { Passage } from "@prisma/client";
import { SingleQuestion } from "../service/passage/passageType"

// createもするのでidはoptional
type PartialPassage = Pick<Passage, "englishLevelId" | "title" | "free" | "accessible"> & { id: number | null }

export const zodPassageUpsertSchema = z.object<toZodSchema<PartialPassage>>({
  // @ts-expect-error: createではidが抜けるので
  id: z.number().optional(),
  englishLevelId: z.number(),
  title: z.string().min(5),
  free: z.boolean(),
  accessible: z.boolean()
})

export const zodPassageQuestionUpsertSchema = z.object<toZodSchema<SingleQuestion>>({
  index: z.number(),
  qTitle: z.string().optional(),
  // @ts-expect-error: とりあえず
  choice: z.string().optional(),
  answer: z.string().optional(),
  explanation: z.string().optional(),
})