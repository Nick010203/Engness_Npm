import { z } from "zod";
import { User, Gender } from "@prisma/client"
import { toZodSchema, zodEmail, zodUserName } from "./common"

type UserCreationNecessaryField = "userName" | "email" | "gender" | "birthYear" | "city"
type UserLoginNecessaryField = "email"

type UserCreationParams = Pick<User, UserCreationNecessaryField>
type EmailLoginParams = Pick<User, UserLoginNecessaryField>

// Genderで出来ないかな...
export const zodGender = z.enum(["male", "female", "middle"])
export const zodBirthday = z.string()
export const zodCity = z.string()

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


