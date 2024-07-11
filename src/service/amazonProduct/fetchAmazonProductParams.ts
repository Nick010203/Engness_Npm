import type { AmazonProduct, EnglishLevel } from "@prisma/client"
export type fetchAmazonProductResponse = AmazonProduct & {
  EnglishLevel: EnglishLevel
}[]