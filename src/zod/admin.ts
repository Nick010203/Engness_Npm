import z from "zod"
import { AdminUser, AdminRole } from "@prisma/client"
import { toZodSchema, zodEmail, zodPassword, zodUserName } from "./common"

type AdminUserLoginNecessaryField = "userName" | "role" | "email" | "password"
type AdminUserLoginParams = Pick<AdminUser, AdminUserLoginNecessaryField>

const adminRoleSchema = z.nativeEnum(AdminRole)

export const zodAdminUserLoginSchema = z.object<toZodSchema<AdminUserLoginParams>>({
  role: adminRoleSchema,
  userName: zodUserName,
  email: zodEmail,
  password: zodPassword
})