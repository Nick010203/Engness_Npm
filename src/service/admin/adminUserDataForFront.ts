import { AdminUser } from "@prisma/client"

const adminUserColumnForFront = ["role", "userName", "email"] as const
type adminUserColumnForFront = (typeof adminUserColumnForFront)[number]

export type adminUserDataForFront = Pick<AdminUser, adminUserColumnForFront>