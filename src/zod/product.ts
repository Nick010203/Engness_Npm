import { z } from "zod"
import { toZodSchema } from "./common"
import { ProductReview, StripeCheckout } from "@prisma/client"

export const zodProductRate = z.number().min(1).max(5)
export const zodReview = z.string().min(1).max(500)
export const zodReviewer = z.string().min(1).max(10)

type ProductReviewNecessaryField = "productId" | "reviewer" | "text" | "rating"
type StripeCheckoutNecessaryField = "email" | "serialNumber"
type ProductReviewCreationParams = Pick<ProductReview, ProductReviewNecessaryField> & Pick<StripeCheckout, StripeCheckoutNecessaryField>

export const zodProductReviewCreationSchema = z.object<toZodSchema<ProductReviewCreationParams>>({
  productId: z.number(),
  reviewer: zodReviewer,
  text: zodReview,
  rating: zodProductRate,
  serialNumber: z.string(),
  email: z.string().email()
}) 