type environment = "development" | "production"
type availablePlanList = "planE" | "planN"

type map = {
  [key in environment]: { [key: string]: availablePlanList }
}

export const subscriptionPlanAndPriceIdMap: map = {
  development: {
    price_1PB7gmKvZSHm7rkbGG9YKdQ7: 'planN'
  },
  production: {}
}
