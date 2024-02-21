import { Primitive, z } from "zod"
import { toZodSchema } from "./common"
import { ProductReview } from "@prisma/client"

export const zodProductRate = z.number().min(1).max(5)
export const zodReview = z.string().min(1).max(500)
export const zodReviewer = z.string().min(1).max(10)

type ProductReviewCreationNecessaryField = "productId" | "reviewer" | "text" | "rating"
type ProductReviewCreationParams = Pick<ProductReview, ProductReviewCreationNecessaryField> & { "serialNumber": string }

export const zodProductReviewCreationSchema = z.object<toZodSchema<ProductReviewCreationParams>>({
  productId: z.number(),
  reviewer: zodReviewer,
  text: zodReview,
  rating: zodProductRate,
  serialNumber: z.string()
}) 