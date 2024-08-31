import { Article } from "@prisma/client"
import { z } from "zod";
import { toZodSchema } from "./common";

type ArticleUpsertType = Omit<Article, "id" | "body"> & { id: number | null }

export const zodArticleInfoUpsertSchema = z.object<toZodSchema<ArticleUpsertType>>({
  id: z.number().nullable(),
  categoryId: z.number(),
  published: z.boolean(),
  name: z.string(),
  title: z.string(),
  description: z.string().nullable()
})