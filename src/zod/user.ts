import { z } from "zod";
import { User, Gender } from "@prisma/client"
import { toZodSchema } from "./common"

const userNameRegex = /^[a-zA-Z0-9]+$/
// password使わなくなったが一応残しておく
const passwordRegex = /^[a-zA-Z0-9-_]+$/

type UserCreationNecessaryField = "userName" | "email" | "gender" | "birthYear" | "city"
type UserLoginNecessaryField = "email"

type UserCreationParams = Pick<User, UserCreationNecessaryField>
type EmailLoginParams = Pick<User, UserLoginNecessaryField>

export const zodUserName = z.string().max(7).regex(userNameRegex)
// Genderで出来ないかな...
export const zodGender = z.enum(["male", "female", "middle"])
export const zodEmail = z.string().email()
export const zodBirthday = z.string()
export const zodCity = z.string()
// password使わないようになったがregexの使い方の参考として一応残しておく
export const zodPassword = z.string().min(8, { message: "More than 8 words" }).max(32, { message: "Less than 32 words" }).regex(passwordRegex, { message: "0-9 or a-z or A-Z" })

export const zodUserCreationSchema = z.object<toZodSchema<UserCreationParams>>({
  userName: zodUserName,
  gender: zodGender,
  email: zodEmail,
  birthYear: zodBirthday,
  city: zodCity,
})

export const zodEmailLoginSchema = z.object<toZodSchema<EmailLoginParams>>({
  email: zodEmail,
})


export const zodUserBasicInfoUpdateSchema = zodUserCreationSchema.omit({ email: true })


