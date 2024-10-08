import { z } from "zod"
import { toZodSchema } from "./common"
import { ProductReview, StripeCheckout } from "@prisma/client"

export const zodProductRate = z.number().min(1, { message: "stringRequired" }).max(5, { message: "reviewRate" })
export const zodReview = z.string().min(1, { message: "stringRequired" }).max(500, { message: "reviewText" })
export const zodReviewer = z.string().min(1, { message: "stringRequired" }).max(10, { message: "reviewerName" })

type ProductReviewNecessaryField = "productId" | "reviewer" | "text" | "rating"
type StripeCheckoutNecessaryField = "email" | "serialNumber"
type ProductReviewCreationParams = Pick<ProductReview, ProductReviewNecessaryField> & Pick<StripeCheckout, StripeCheckoutNecessaryField>

export const zodProductReviewCreationSchema = z.object<toZodSchema<ProductReviewCreationParams>>({
  productId: z.number(),
  reviewer: zodReviewer,
  text: zodReview,
  rating: zodProductRate,
  serialNumber: z.string().min(1, { message: "stringRequired" }),
  email: z.string().email({ message: "zodEmailError" })
}) 