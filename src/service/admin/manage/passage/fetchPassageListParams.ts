
import { Passage, EnglishLevel } from "@prisma/client"

export type fetchPassageListResponse = Array<Passage & { "EnglishLevel": EnglishLevel | null }>