import { z } from "zod"
import { toZodSchema } from "./common";
import { sendContactParams } from "src/service/contact/sendContactParams"

export const zodContactCreateSchema = z.object<toZodSchema<Omit<sendContactParams, "recaptchaToken">>>({
  email: z.string().email(),
  contactText: z.string().min(1).max(300)
})