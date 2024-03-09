import { AdminUser } from "@prisma/client"

const adminUserColumnForFront = ["id", "role", "userName", "email"] as const
type adminUserColumnForFront = (typeof adminUserColumnForFront)[number]

export type adminUserDataForFront = Pick<AdminUser, adminUserColumnForFront>