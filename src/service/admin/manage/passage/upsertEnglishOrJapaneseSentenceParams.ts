import type { OutputData } from '@editorjs/editorjs'

export type upsertEnglishOrJapaneseSentenceParams = {
  language: "english" | "japanese"
  passageId: number
  sentenceIndex: number
  data: OutputData
}