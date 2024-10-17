import { AmazonProduct } from "@prisma/client"
import { z } from "zod";
import { toZodSchema } from "./common";

type AmazonProductForUpsert = Omit<AmazonProduct, "id"> & { id: number | null }

export const zodAmazonProductUpsertSchema = z.object<toZodSchema<AmazonProductForUpsert>>({
  id: z.number().nullable(),
  englishLevelId: z.number(),
  name: z.string().min(1),
  imgHtmlTag: z.string().min(1),
  affiliateUrl: z.string().min(1),
})