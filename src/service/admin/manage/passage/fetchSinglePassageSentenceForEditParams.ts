import { SingleSentence } from "src/service/passage/passageType"

export type fetchSinglePassageSentenceForEditParams = {
  passageId: number
  index: number
}


export type fetchSinglePassageSentenceForEditResponse = {
  singleSentence: SingleSentence
}