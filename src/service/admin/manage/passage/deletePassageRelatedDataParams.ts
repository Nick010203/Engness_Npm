
export type deletePassageRelatedDataParams = {
  deleteTarget: "passage" | "question" | "sentence"
  passageId: number
  questionOrSentenceIndex: number
}