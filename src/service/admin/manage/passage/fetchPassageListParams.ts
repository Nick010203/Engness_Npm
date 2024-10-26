
import { Passage, EnglishLevel } from "@prisma/client"

export type fetchPassageListResponse = Array<Omit<Passage, 'englishLevelId'> & { EnglishLevel: EnglishLevel | null, wordCount: number }>