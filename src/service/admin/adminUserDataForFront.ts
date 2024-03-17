import { AdminUser } from "@prisma/client"

const adminUserColumnForFront = ["id", "role", "adminName", "adminEmail"] as const
type adminUserColumnForFront = (typeof adminUserColumnForFront)[number]

export type adminUserDataForFront = Pick<AdminUser, adminUserColumnForFront>