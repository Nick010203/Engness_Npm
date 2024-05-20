import type { User, subscriptionPlan } from "@prisma/client"

export const userColumnForFront = ['id', 'userName', 'email', 'gender', 'city', 'birthYear'] as const
type userColumnForFront = (typeof userColumnForFront)[number]
export type userDataForFront = Pick<User, userColumnForFront> & { subscribingPlan: subscriptionPlan }

export const sessionColumnForFront = ["id", 'userName'] as const
type sessionColumnForFront = (typeof sessionColumnForFront)[number]
export type sessionDataForFront = Pick<User, sessionColumnForFront> & { accessToken: string }