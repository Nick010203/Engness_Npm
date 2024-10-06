import * as prisma from '@prisma/client'

export const dashboardAccessibleTableList: Partial<Uncapitalize<prisma.Prisma.ModelName>>[] = ["user", "adminUser", "stripeCheckout", "stripeSubscription", "contactHistory"]