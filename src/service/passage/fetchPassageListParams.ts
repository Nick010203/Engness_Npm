import type { Passage, EnglishLevel } from "@prisma/client"

export type fetchPassageListParams = {
  englishLevelId: string | "all"
}

// passage.freeのカラムをサブスク有無によってpassage.challengeableに上書く
export type PassageWithChallengeAbility = Passage & { LikePassage: { id: number } } & { challengeable: boolean }

// EnglishLevelがkeyになっている
export type PassageListGroupedByEnglishLevel = { [key: string]: PassageWithChallengeAbility[] }[]

export type fetchPassageListResponse = PassageListGroupedByEnglishLevel