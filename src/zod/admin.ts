import z from "zod"
import { AdminUser, AdminRole } from "@prisma/client"
import { toZodSchema, zodEmail, zodPassword, zodUserName } from "./common"

type AdminUserCreateNecessaryField = "userName" | "role" | "email"
type AdminUserCreateParams = Pick<AdminUser, AdminUserCreateNecessaryField>

const adminRoleSchema = z.nativeEnum(AdminRole)

type AdminUserLoginNecessaryField = "email" | "password"
type AdminUserLoginParams = Pick<AdminUser, AdminUserLoginNecessaryField>

export const zodAdminUserCreateSchema = z.object<toZodSchema<AdminUserCreateParams>>({
  role: adminRoleSchema,
  userName: zodUserName,
  email: zodEmail
})

export const zodAdminUserLoginSchema = z.object<toZodSchema<AdminUserLoginParams>>({
  email: zodEmail,
  password: zodPassword
})