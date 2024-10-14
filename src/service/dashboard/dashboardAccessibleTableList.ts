import * as prisma from '@prisma/client'
import type { ModelMap } from "../../prisma/prismaQueryType"

// Partial<Uncapitalize<prisma.Prisma.ModelName>>[]
export const dashboardAccessibleTableList: Array<keyof ModelMap> = ["user", "adminUser", "stripeCheckout", "stripeSubscription", "contactHistory", "amazonProduct"]