import { z } from "zod"
import { toZodSchema } from "./common";
import { sendContactParams } from "src/service/contact/sendContactParams"

export const zodContactText = z.string().min(1, { message: "stringRequired" }).max(300, { message: "contactText" })

export const zodContactCreateSchema = z.object<toZodSchema<Omit<sendContactParams, "recaptchaToken">>>({
  email: z.string().email({ message: "zodEmailError" }),
  contactTitle: z.string().min(1, { message: "stringRequired" }),
  contactText: zodContactText
})