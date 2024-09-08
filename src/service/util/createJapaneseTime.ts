import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.tz.setDefault('Asia/Tokyo')

type dateType = string | number | Date

export class createJapaneseTime {
  constructor() { }

  // dayjsのオブジェクトを返すだけ、どうformatするかは受け手次第
  convertForeignTimeToJapanese(date: dateType) {
    const dayjsDate = dayjs(date)
    // これでやっと日本のタイムゾーンになる
    const japanTime = dayjsDate.tz()
    return japanTime
  }

  unixExchangeBeforeDayjs(date: dateType) {
    return (date as number) * 1000
  }

  // unixのタイムスタンプをDBのDateTime用に変える
  unixToDbDate(date: dateType) {
    const timeStamp = this.unixExchangeBeforeDayjs(date)
    return this.convertForeignTimeToJapanese(timeStamp).format('YYYY-MM-DD HH:mm:ss')
  }
}
