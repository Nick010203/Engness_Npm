import { z } from "zod";
import zodErrorMessageMap from "../zod/error/zodErrorMessageMap"

// // 参考 : https://zenn.dev/uttk/articles/bd264fa884e026#%E5%9E%8B%E5%BC%95%E6%95%B0%E3%81%AE%E6%B8%A1%E3%81%97%E6%96%B9
export type toZodSchema<T extends Record<string, any>> = {
  [K in keyof T]-?: z.ZodType<T[K]>;
}

const userNameRegex = /^[a-zA-Z0-9-]+$/
const passwordRegex = /^[a-zA-Z0-9-_]+$/

export const zodUserName = z.string().min(1, { message: "stringRequired" }).max(7, { message: "userNameMax" }).regex(userNameRegex, { message: "userNameRegex" })

export const zodEmail = z.string().email({ message: "zodEmailError" })
export const zodPassword = z.string().min(8).max(50).regex(passwordRegex, { message: "zodPasswordRegex" })