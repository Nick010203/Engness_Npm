import { EnglishWordAnnotation } from "../../../../service/passage/passageType"

export type upsertPassageSentenceWordAnnotationParams = {
  passageId: number
  wordAnnotationList: EnglishWordAnnotation[]
}