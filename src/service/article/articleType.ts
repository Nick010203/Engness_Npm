import type { Article } from "@prisma/client"

export const articleCategoryList = ["英検", "大学受験", "高校受験", "留学", "各種紹介", "共通テスト", "本社"] as const

export type articleCategory = (typeof articleCategoryList)[number]

export type articleListGroupedByCategory = {
  [K in articleCategory]: Article[]
}