import type { OutputData } from '@editorjs/editorjs'

export type upsertEnglishOrJapaneseSentenceParams = {
  language: "en" | "jp"
  passageId: number
  sentenceIndex: number
  data: OutputData
}