import { OutputData } from '@editorjs/editorjs'

export type fetchSinglePassageDataForFrontResponse = {
  englishLevelRange: string,
  isFree: boolean,
  sentence: {
    enTitle: string
    jpTitle: string
    enFirstPassageSentence: OutputData,
    jpFirstPassageSentence: OutputData
  },
  question: {
    firstQuestionTitle: Array<string>
    firstQuestionQList: Array<string | number>[]
  }
}