import { UserCountry } from "@prisma/client"

// dayjsでもstringになってたので独自定義
export type availableTimeZone = 'Asia/Tokyo'

export const dateManagerTimeZone: { [country in UserCountry]: availableTimeZone } = {
  "Japan": "Asia/Tokyo"
}