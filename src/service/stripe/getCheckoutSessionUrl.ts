
export type getCheckoutSessionUrlBody = {
  priceId: string
  productId: number
  jwt: string
}

export type getCheckoutSessionUrlResponse = {
  checkoutSessionUrl: string
}