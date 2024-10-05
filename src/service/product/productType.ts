import { Product, ProductReview } from "@prisma/client"

export type ProductWithReview = Omit<Product, 'image'> & { image: { path: string }[] } & { ProductReview: ProductReview[] }