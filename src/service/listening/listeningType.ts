import { Listening, LikeListening } from '@prisma/client'

export type sortOption = "all" | "sortByLap" | "unLikedOnly" | "LikedOnly"

export type ListeningWithLike = Listening & {
  LikeListening: LikeListening
}