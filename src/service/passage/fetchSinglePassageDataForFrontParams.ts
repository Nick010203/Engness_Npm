
export type fetchSinglePassageDataForFrontParams = {
  isFree: boolean,
  sentence: {
    enFirstPassageSentence: string,
    jpFirstPassageSentence: string
  },
  question: {
    firstQuestionTitle: string
    firstQuestionQList: string
  }
}