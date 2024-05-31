import { AdminUser } from "@prisma/client"

const adminUserColumnForFront = ["id", "role", "adminName", "adminEmail"] as const
type adminUserColumnForFront = (typeof adminUserColumnForFront)[number]
export type adminUserDataForFront = Pick<AdminUser, adminUserColumnForFront>

export const adminSessionColumnForFront = ["id", 'adminName', "role",] as const
type adminSessionColumnForFront = (typeof adminSessionColumnForFront)[number]
export type adminSessionDataForFront = Pick<AdminUser, adminSessionColumnForFront> & { accessToken: string, isAdmin: true }