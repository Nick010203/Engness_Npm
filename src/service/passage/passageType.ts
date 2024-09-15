import { Passage, PassageQuestion, PassageSentence, PassageUpdateInformation } from "@prisma/client"
import type { OutputData, OutputBlockData } from '@editorjs/editorjs'

export type PassageWithRelatedData = Passage & {
  PassageQuestion: SinglePassageQuestion | null,
  PassageSentence: SinglePassageSentence | null
  PassageUpdateInformation: PassageUpdateInformation[]
}

export type SingleSentence = {
  index: number
  jp?: OutputData | null //editorjsのデータ
  en?: OutputData | null//editorjsのデータ
}

export type EnglishWordAnnotation = { id: number, englishWord: string, japaneseMeaning: string }
export type SinglePassageSentence = Omit<PassageSentence, "sentenceList" | "referenceList" | "annotationList"> &
{
  annotationList: EnglishWordAnnotation[]
  referenceList: string[]
  sentenceList: SingleSentence[]
}

export const answerBoxHeight = ["", "short", "middle", "long"] as const
export type SingleQuestion = {
  index: number
  pageBreak: boolean
  qTitle: string
  choice: Array<string | number> // lengthが0のとき自由入力の問題
  answer: Array<string | number> | string // Array:複数回答の問題、string:文で解答例を出したりする問題
  explanation: string
  answerBoxHeight: (typeof answerBoxHeight)[number]
}

// PassageQuestion データサンプル 
// [{ index: 0, title: 'What is the capital of France?', choice: ['Paris', 'London', 'Berlin', 'Madrid'], answer: ['Paris'] }]
export type SinglePassageQuestion = Omit<PassageQuestion, "questionList"> & {
  questionList: SingleQuestion[]
}