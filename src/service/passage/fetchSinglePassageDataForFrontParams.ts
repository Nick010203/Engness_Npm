import { OutputData } from '@editorjs/editorjs'

// フロントのpassage/:passageIdのパスへアクセスしたときに得られるデータ
export type fetchSinglePassageDataForFrontResponse = {
  englishLevelRange: string,
  isFree: boolean,
  accessible: boolean, // この問題にアクセスできるか = 無料会員なのに有料問題にアクセスしているどうか
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