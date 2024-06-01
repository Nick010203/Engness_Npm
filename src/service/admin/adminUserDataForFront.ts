import { AdminUser } from "@prisma/client"

const adminUserColumnForFront = ["id", "role", "adminName", "adminEmail"] as const
export type adminUserColumnForFront = (typeof adminUserColumnForFront)[number]
export type adminUserDataForFront = Pick<AdminUser, adminUserColumnForFront>

export const adminSessionColumnForFront = ["id", 'adminName', "role",] as const
export type adminSessionColumnForFront = (typeof adminSessionColumnForFront)[number]
export type adminSessionDataForFront = Pick<AdminUser, adminSessionColumnForFront> & { accessToken: string, isAdmin: true }