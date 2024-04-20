import { sortOption, ListeningWithLike } from "./listeningType"
import { Listening } from "@prisma/client"

export type fetchListeningListParams = {
  sortOption: sortOption
  lap: number
}

export type fetchListeningListResponse = Listening[] | ListeningWithLike[]