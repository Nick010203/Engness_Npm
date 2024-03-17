import z from "zod"
import { AdminUser, AdminRole } from "@prisma/client"
import { toZodSchema, zodEmail, zodPassword, zodUserName } from "./common"

type AdminUserCreateNecessaryField = "adminName" | "role" | "adminEmail"
type AdminUserCreateParams = Pick<AdminUser, AdminUserCreateNecessaryField>

const adminRoleSchema = z.nativeEnum(AdminRole)

type AdminUserLoginNecessaryField = "adminEmail" | "password"
type AdminUserLoginParams = Pick<AdminUser, AdminUserLoginNecessaryField>

export const zodAdminUserCreateSchema = z.object<toZodSchema<AdminUserCreateParams>>({
  role: adminRoleSchema,
  adminName: zodUserName,
  adminEmail: zodEmail
})

export const zodAdminUserLoginSchema = z.object<toZodSchema<AdminUserLoginParams>>({
  adminEmail: zodEmail,
  password: zodPassword
})