import { z } from "zod"
import { AdminUser } from "@prisma/client"
import { zodAdminUserLoginSchema } from "../../../zod/admin"
import { adminSessionDataForFront } from "../adminUserDataForFront"

export type adminUserLoginPrepareParams = z.infer<typeof zodAdminUserLoginSchema>

export type adminUseLoginValidationParams = Pick<AdminUser, 'adminEmail'> & { oneTimePassword: string }
export type adminUserLoginValidationResponse = { isExpiredOneTimePassword: boolean }

export type loginAdminUserParams = Pick<AdminUser, 'adminEmail'>;
export type loginAdminUserResponse = adminSessionDataForFront

