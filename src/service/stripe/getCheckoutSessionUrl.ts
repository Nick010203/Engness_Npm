
export type getCheckoutSessionUrlBody = {
  priceId: string
  jwt: string
}

export type getCheckoutSessionUrlResponse = {
  checkoutSessionUrl: string
}