import type { AmazonProduct, EnglishLevel } from "@prisma/client"
export type AmazonProductWithEnglishLevel = AmazonProduct & {
  EnglishLevel: EnglishLevel
}

export type fetchAmazonProductResponse = AmazonProductWithEnglishLevel[]
