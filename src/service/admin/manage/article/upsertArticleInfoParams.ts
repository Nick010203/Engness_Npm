import { z } from "zod"
import { zodArticleInfoUpsertSchema } from "../../../../zod/article"


export type upsertArticleInfoParams = z.infer<typeof zodArticleInfoUpsertSchema>