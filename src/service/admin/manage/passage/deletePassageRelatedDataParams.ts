type DeleteTarget = "passage" | "question" | "sentence"
export type deletePassageRelatedDataParams<T extends DeleteTarget> = {
  deleteTarget: T
  passageId: number
  questionOrSentenceIndex: T extends "passage" ? null : number
}