import { PassageLevel, Passage, PassageQuestion, PassageSentence } from "@prisma/client"

export type PassageWithRelatedData = Passage & {
  PassageQuestion: PassageQuestion | null,
  PassageSentence: PassageSentence | null
}


// データサンプル 
// [{ index: 0, answer: ['Paris'], choice: ['Paris', 'London', 'Berlin', 'Madrid'], question: 'What is the capital of France?' }]

export type SinglePassageSentence = Omit<PassageSentence, "sentenceList"> &
{
  sentenceList: {
    index: number
    jp: Array<string>
    en: Array<string>
  }[]
}


export type SinglePassageQuestion = Omit<PassageQuestion, "questionList"> & {
  questionList: {
    index: number
    question: string
    choice: Array<string | number>
    answer: Array<string | number> // 複数回答もありえるので
  }[]
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
