import type { Passage, EnglishLevel } from "@prisma/client"

export type fetchPassageListParams = {
  englishLevelId: number | "all"
}
export type fetchPassageListResponse = { englishLevel: EnglishLevel, passageList: Passage & { free: boolean }[] }