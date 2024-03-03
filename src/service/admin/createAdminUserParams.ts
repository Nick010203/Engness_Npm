import { AdminRole } from "@prisma/client"

export type createAdminUserParams = {
  email: string
  role: AdminRole
}