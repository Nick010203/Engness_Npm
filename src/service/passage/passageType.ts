import { Passage, PassageQuestion, PassageSentence, EnglishLevel } from "@prisma/client"

export type PassageWithRelatedData = Passage & {
  PassageQuestion: SinglePassageQuestion | null,
  PassageSentence: SinglePassageSentence | null
}

type SingleSentence = {
  index: number
  jp?: Array<string> //editorjsのツリー
  en?: Array<string> //editorjsのツリー
}

export type SinglePassageSentence = Omit<PassageSentence, "sentenceList"> &
{
  sentenceList: SingleSentence[]
}

export type SingleQuestion = {
  index: number
  qTitle?: string
  choice?: Array<string | number>
  answer?: Array<string | number> // 複数回答もありえるので
}

// PassageQuestion データサンプル 
// [{ index: 0, title: 'What is the capital of France?', choice: ['Paris', 'London', 'Berlin', 'Madrid'], answer: ['Paris'] }]
export type SinglePassageQuestion = Omit<PassageQuestion, "questionList"> & {
  questionList: SingleQuestion[]
}