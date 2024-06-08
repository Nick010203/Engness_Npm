import { PassageLevel } from "@prisma/client"

export type overWrittenSinglePassageSentence = {
  jp: Array<string>
  en: Array<string>
}

export type overWrittenSinglePassageQuestion = {
  question: string
  choice: Array<string | number>
  answer: Array<string | number> // 複数回答もありえるので
}

export const passageLevelMap: { level: PassageLevel, list: string }[] = [
  {
    level: "C2",
    list: "IELTS 9.0 ~ 8.5"
  },
  {
    level: "C1",
    list: "英検 1, IELTS 8.0 ~ 7.0"
  }, {
    level: "B2",
    list: "英検 1 ~ Pre1, IELTS 6.5 ~ 5.5"
  },
  {
    level: "B1",
    list: "英検 Pre1 ~ 2, IELTS 5.0 ~ 4.0"
  },
  {
    level: "A2",
    list: "英検 2 ~ Pre2"
  },
  {
    level: "A1",
    list: "英検 Pre2 ~ 3"
  }
]
