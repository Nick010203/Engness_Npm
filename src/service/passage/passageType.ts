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

export const passageLevelMap: { [key in PassageLevel]: string } = {
  "C2": "IELTS 9.0 ~ 8.5",
  "C1": "英検 1, IELTS 8.0 ~ 7.0",
  "B2": "英検 1 ~ Pre1, IELTS 6.5 ~ 5.5",
  "B1": "英検 Pre1 ~ 2, IELTS 5.0 ~ 4.0",
  "A2": "英検 2 ~ Pre2",
  "A1": "英検 Pre2 ~ 3"
}
