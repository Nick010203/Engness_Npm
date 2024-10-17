import { z } from "zod"
import { zodAmazonProductUpsertSchema } from "../../../../zod/amazonProduct"

export type upsertAmazonProductParams = z.infer<typeof zodAmazonProductUpsertSchema>