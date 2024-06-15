import type { Blog, BlogCategory } from "@prisma/client"

export const blogCategoryList = ["英検", "大学受験", "高校受験", "留学", "各種紹介", "共通テスト", "本社"] as const

export type blogCategory = (typeof blogCategoryList)[number]

export type blogListGroupedByCategory = {
  [K in blogCategory]: Blog[]
}