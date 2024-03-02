import z from "zod"
import { AdminUser } from "@prisma/client"
import { toZodSchema, zodEmail, zodPassword } from "./common"

type AdminUserLoginNecessaryField = "userName" | "password"

type AdminUserLoginParams = Pick<AdminUser, AdminUserLoginNecessaryField>

export const zodAdminUserLoginSchema = z.object<toZodSchema<AdminUserLoginParams>>({

})