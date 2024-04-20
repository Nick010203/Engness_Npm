import { Listening, LikeListening } from '@prisma/client'

export type sortOption = "all" | "sortByLap" | "unLikedOnly" | "likedOnly"

export type ListeningWithLike = Listening & {
  LikeListening: LikeListening
}