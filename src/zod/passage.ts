import { ZodAnyDef, z } from "zod"
import { toZodSchema } from "./common";
import { PassageLevel, Passage } from "@prisma/client";
import { SingleQuestion } from "../service/passage/passageType"

const passageLevel: PassageLevel[] = ["C2", "C1", "B2", "B1", "A2", "A1"] as const
// これなに... むず... でも上手く動いてそう
const passageLevelEnum = z.enum([...passageLevel] as [PassageLevel, ...PassageLevel[]])

type PartialPassage = Pick<Passage, "level" | "title">

export const zodPassageCreationSchema = z.object<toZodSchema<PartialPassage>>({
  level: passageLevelEnum,
  title: z.string().min(5)
})

export const zodPassageQuestionCreateAndUpdateSchema = z.object<toZodSchema<SingleQuestion>>({
  index: z.number(),
  qTitle: z.string().optional(),
  // @ts-expect-error: とりあえず
  choice: z.string().optional(),
  // @ts-expect-error: とりあえず
  answer: z.string().optional()
})