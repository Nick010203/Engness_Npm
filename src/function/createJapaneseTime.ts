import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.tz.setDefault('Asia/Tokyo')

type dateType = string | number | Date

export class createJapaneseTime {
  currentTime: dayjs.Dayjs
  constructor() {
    this.currentTime = dayjs()
  }

  // dayjsのオブジェクトを返すだけ、どうformatするかは受け手次第
  // 引数がない場合は日本時間の現在時刻を返す
  convertForeignTimeToJapanese(date?: dateType) {
    const dayjsDate = dayjs(date ?? this.currentTime)
    // これでやっと日本のタイムゾーンになる
    const japanTime = dayjsDate.tz()
    return japanTime
  }

  getUtcCurrentTime() {
    return this.currentTime
  }

  // UTCの時刻をJSTに変換
  convertUtcToJst(date?: dateType) {
    const dayjsDate = dayjs(date ?? this.currentTime)
    return dayjsDate.add(9, "hour")
  }

  // unixのタイムスタンプをDBのDateTime用に変える
  unixToDbDate(date: dateType) {
    const timeStamp = (date as number) * 1000
    return this.convertForeignTimeToJapanese(timeStamp).format('YYYY-MM-DD HH:mm:ss')
  }
}
