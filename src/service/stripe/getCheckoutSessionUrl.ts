
export type getCheckoutSessionUrlBody = {
  productId: number
  jwt: string
}

export type getCheckoutSessionUrlResponse = {
  checkoutSessionUrl: string
}