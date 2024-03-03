import { AdminRole } from "@prisma/client"

export type createAdminUserParams = {
  email: string
  userName: string
  role: AdminRole
}