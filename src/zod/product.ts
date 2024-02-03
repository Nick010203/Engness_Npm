import { z } from "zod"
import { toZodSchema } from "./common"

export const zodProductRate = z.number().min(1).max(5)