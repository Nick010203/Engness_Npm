import type { Blog, BlogCategory } from "@prisma/client"

export type blogCategory = "英検" | "大学受験" | "高校受験" | "留学" | "各種紹介" | "共通テスト" | "本社"

export type blogListGroupedByCategory = {
  [K in blogCategory]: Blog[]
}