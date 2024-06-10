
export type checkSamePassageQuestionOrSentenceIdExistParams = {
  passageId: number | string
  passageQuestionOrAnswerId: number | string
  checkType: "passageQuestion" | "passageSentence"
}

export type checkSamePassageQuestionOrSentenceIdExistResponse = {
  isSameOneExist: boolean
}