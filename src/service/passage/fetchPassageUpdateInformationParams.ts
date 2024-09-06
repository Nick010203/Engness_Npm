import type { PassageUpdateInformation } from "@prisma/client"

export type fetchPassageUpdateInformationParams = {
  passageId: number
}

export type fetchPassageUpdateInformationResponse = {
  accessAble: boolean
  passageUpdateInformation?: PassageUpdateInformation[]
}