import type { User, subscriptionPlan } from "@prisma/client"

export const userColumnForFront = ['id', 'userName', 'email', 'gender', 'city', 'birthYear'] as const
type userColumnForFront = (typeof userColumnForFront)[number]

export type userDataForFront = Pick<User, userColumnForFront> & { subscribingPlan: subscriptionPlan }