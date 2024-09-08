import type { Passage, PassageUpdateInformation } from "@prisma/client"

export type fetchPassageUpdateInformationResponse = {
  accessAble: boolean
  passageAndUpdateInformation?: Passage & { PassageUpdateInformation: PassageUpdateInformation[] }
}