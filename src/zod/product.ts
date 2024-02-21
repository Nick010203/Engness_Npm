import { z } from "zod"
import { toZodSchema } from "./common"

export const zodProductRate = z.number().min(1).max(5)

export const zodReview = z.string().min(1).max(500)