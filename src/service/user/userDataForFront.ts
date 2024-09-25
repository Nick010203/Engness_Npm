import type { User } from "@prisma/client"
import type { availablePlanList } from "../stripe/subscriptionPlanAndPriceIdMap"

export const userColumnForFront = ['id', 'userName', 'email', 'gender', 'city', 'birthYear', "birthMonth"] as const
export type userColumnForFront = (typeof userColumnForFront)[number]
export type userDataForFront = Pick<User, userColumnForFront> & { subscribingPlan: availablePlanList }

export const sessionColumnForFront = ["id", 'userName'] as const
export type sessionColumnForFront = (typeof sessionColumnForFront)[number]
export type sessionDataForFront = Pick<User, sessionColumnForFront> & { accessToken: string }