import { User } from "@prisma/client"

const userColumnForFront = ['id', 'userName', 'email', 'gender', 'city', 'birthYear'] as const
type userColumnForFront = (typeof userColumnForFront)[number]

export type userDataForFront = Pick<User, userColumnForFront> & { accessToken: string }