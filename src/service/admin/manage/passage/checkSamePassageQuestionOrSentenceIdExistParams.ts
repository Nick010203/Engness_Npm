
type checkSamePassageQuestionOrSentenceIdExistParams = {
  passageId: number | string
  passageQuestionOrAnswerId: number | string
  checkType: "passageQuestion" | "passageSentence"
}

type checkSamePassageQuestionOrSentenceIdExistResponse = {
  isSameOneExist: boolean
}