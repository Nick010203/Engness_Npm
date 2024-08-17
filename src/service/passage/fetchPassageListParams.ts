import type { Passage, EnglishLevel } from "@prisma/client"

export type fetchPassageListParams = {
  englishLevelId: string | "all"
}
export type fetchPassageListResponse = {
  englishLevel: EnglishLevel,
  passageList: { [key: string]: Passage & { challengeable: boolean }[] }
}