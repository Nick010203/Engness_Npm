
export type fetchSinglePassageDataForFrontParams = {
  englishLevelRange: string,
  isFree: boolean,
  sentence: {
    enFirstPassageSentence: string,
    jpFirstPassageSentence: string
  },
  question: {
    firstQuestionTitle: string
    firstQuestionQList: Array<string | number>
  }
}