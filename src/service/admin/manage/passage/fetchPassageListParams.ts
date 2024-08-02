
import { Passage, EnglishLevel } from "@prisma/client"

export type fetchPassageListResponse = Omit<Passage, "englishLevelId"> & { "englishLevelId": EnglishLevel }[]