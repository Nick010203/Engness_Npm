import { AdminUser } from "@prisma/client"

const adminUserColumnForFront: Array<keyof AdminUser> = ["id", "role", "adminName", "adminEmail"] as const
type adminUserColumnForFront = (typeof adminUserColumnForFront)[number]
export type adminUserDataForFront = Pick<AdminUser, adminUserColumnForFront>

export const sessionColumnForFront: Array<keyof AdminUser> = ["id", 'adminName', "role"] as const
type adminSessionColumnForFront = (typeof sessionColumnForFront)[number]
export type sessionDataForFront = Pick<AdminUser, adminSessionColumnForFront> & { accessToken: string, isAdmin: true }