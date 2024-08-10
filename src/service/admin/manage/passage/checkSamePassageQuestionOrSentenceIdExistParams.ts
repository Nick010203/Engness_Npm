
export type checkSamePassageQuestionOrSentenceIdExistParams = {
  passageId: number | string
  passageQuestionOrSentenceIndex: number | string
  checkType: "passageQuestion" | "passageSentence"
}

export type checkSamePassageQuestionOrSentenceIdExistResponse = {
  isSameOneExist: boolean
}