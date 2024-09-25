import { z } from "zod";
import { User } from "@prisma/client"
import { toZodSchema, zodEmail, zodUserName } from "./common"

type UserCreationNecessaryField = "userName" | "email" | "gender" | "birthYear" | "birthMonth" | "city"
type UserLoginNecessaryField = "email"

type UserCreationParams = Pick<User, UserCreationNecessaryField>
type EmailLoginParams = Pick<User, UserLoginNecessaryField>

// フロントで使うために定義
export const zodGender = z.enum(["male", "female", "middle"])
export const zodBirthYear = z.string()
export const zodBirthMonth = z.string()
export const zodCity = z.string()

export const zodUserCreationSchema = z.object<toZodSchema<UserCreationParams>>({
  userName: zodUserName,
  gender: zodGender,
  email: zodEmail,
  birthYear: zodBirthYear,
  birthMonth: zodBirthMonth,
  city: zodCity,
})

export const zodEmailLoginSchema = z.object<toZodSchema<EmailLoginParams>>({
  email: zodEmail,
})


export const zodUserBasicInfoUpdateSchema = zodUserCreationSchema.omit({ email: true })


