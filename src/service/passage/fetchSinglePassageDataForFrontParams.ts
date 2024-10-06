import { OutputData } from '@editorjs/editorjs'

export type fetchSinglePassageDataForFrontResponse = {
  englishLevelRange: string,
  isFree: boolean,
  sentence: {
    enFirstPassageSentence: OutputData,
    jpFirstPassageSentence: OutputData
  },
  question: {
    firstQuestionTitle: string
    firstQuestionQList: Array<string | number>
  }
}