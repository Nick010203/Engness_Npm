import { PassageLevel, Passage, PassageQuestion, PassageSentence } from "@prisma/client"

export type PassageWithRelatedData = Passage & {
  PassageQuestion: PassageQuestion | null,
  PassageSentence: PassageSentence | null
}

type SingleSentence = {
  index: number
  jp?: Array<string>
  en?: Array<string>
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

export const passageLevelMap: { level: PassageLevel, examLevel: string }[] = [
  {
    level: "C2",
    examLevel: "IELTS 9.0 ~ 8.5"
  },
  {
    level: "C1",
    examLevel: "英検 1, IELTS 8.0 ~ 7.0"
  }, {
    level: "B2",
    examLevel: "英検 1 ~ Pre1, IELTS 6.5 ~ 5.5"
  },
  {
    level: "B1",
    examLevel: "英検 Pre1 ~ 2, IELTS 5.0 ~ 4.0"
  },
  {
    level: "A2",
    examLevel: "英検 2 ~ Pre2"
  },
  {
    level: "A1",
    examLevel: "英検 Pre2 ~ 3"
  }
]
