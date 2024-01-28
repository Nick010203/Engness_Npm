import { z } from "zod";
import { User, Gender } from "@prisma/client"

const userNameRegex = /^[a-zA-Z0-9]+$/
const passwordRegex = /^[a-zA-Z0-9-_]+$/

type UserCreationNecessaryField = "userName" | "email" | "gender" | "birthYear" | "city" | "password"
type UserLoginNecessaryField = "email" | "password"

type UserCreationParams = Pick<User, UserCreationNecessaryField>
type UserLoginParams = Pick<User, UserLoginNecessaryField>

export const zodUserName = z.string().max(7).regex(userNameRegex)
// Genderで出来ないかな...
export const zodGender = z.enum(["male", "female", "middle"])
export const zodEmail = z.string().email()
export const zodBirthday = z.string()
export const zodCity = z.string()
export const zodPassword = z.string().min(8, { message: "More than 8 words" }).max(32, { message: "Less than 32 words" }).regex(passwordRegex, { message: "0-9 or a-z or A-Z" })

// // 参考 : https://zenn.dev/uttk/articles/bd264fa884e026#%E5%9E%8B%E5%BC%95%E6%95%B0%E3%81%AE%E6%B8%A1%E3%81%97%E6%96%B9
type toZod<T extends Record<string, any>> = {
  [K in keyof T]-?: z.ZodType<T[K]>;
}

export const zodUserCreationSchema = z.object<toZod<UserCreationParams>>({
  userName: zodUserName,
  gender: zodGender,
  email: zodEmail,
  birthYear: zodBirthday,
  city: zodCity,
  password: zodPassword
})

export const zodUserLoginSchema = z.object<toZod<UserLoginParams>>({
  email: zodEmail,
  password: zodPassword
})


export const zodUserBasicInfoUpdateSchema = zodUserCreationSchema.omit({ password: true })


