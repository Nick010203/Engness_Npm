const productList = ["BeComeLevel6"] as const

export type productMap = {
  [K in typeof productList[number]]: {
    stripeId: string
    productId: Number
  }
}
