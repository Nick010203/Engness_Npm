import type { Passage, EnglishLevel } from "@prisma/client"

export type fetchPassageListParams = {
  englishLevelId: string | "all"
}

// passage.freeのカラムをサブスク有無によってpassage.challengeableに上書く
export type PassageWithChallengeAbility = Passage & { challengeable: boolean }

// EnglishLevelがkeyになっている
export type fetchPassageListResponse = { [key: string]: PassageWithChallengeAbility[] }[]