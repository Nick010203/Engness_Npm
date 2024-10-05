import z from "zod"
import { zodProductReviewCreationSchema } from "../../zod/product"

export type createReviewParams = z.infer<typeof zodProductReviewCreationSchema>