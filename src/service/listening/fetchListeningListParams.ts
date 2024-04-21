import { sortOption, ListeningWithLike } from "./listeningType"

export type fetchListeningListParams = {
  sortOption: sortOption
  lap: number
}

export type fetchListeningListResponse = ListeningWithLike[]