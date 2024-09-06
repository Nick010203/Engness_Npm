import type { PassageUpdateInformation } from "@prisma/client"

export type fetchPassageUpdateInformationResponse = {
  accessAble: boolean
  passageUpdateInformation?: PassageUpdateInformation[]
}