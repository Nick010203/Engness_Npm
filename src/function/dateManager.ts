import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayjs.extend(utc)
dayjs.extend(timezone)

type dateType = string | number | Date | dayjs.Dayjs

export class dateManager {
  private currentTime: dayjs.Dayjs
  constructor() {
    this.currentTime = dayjs().utc()
  }

  // dayjsのオブジェクトを返すだけ、どうformatするかは受け手次第
  // 引数がない場合は日本時間の現在時刻を返す
  // setJapaneseTimeZone(date?: dateType) {
  //   dayjs().tz('Asia/Tokyo')
  // }

  getUtcCurrentTime() {
    return this.currentTime
  }

  getJstCurrentTime() {
    return this.convertUtcToJst(this.currentTime)
  }

  getUtcTime(date: dateType) {
    return dayjs(date).utc()
  }

  // UTCの時刻をJSTに変換
  convertUtcToJst(date: dateType) {
    const dayjsDate = dayjs(date)
    return dayjsDate.add(9, "hour")
  }

  // DB用の日付形式に変換
  // dayjsを再び通してtimezoneの再変換が起こったりしては面倒なので引数はdayjsのみ
  convertTimeToDbDate(date: dayjs.Dayjs) {
    return date.format('YYYY-MM-DD HH:mm:ss')
  }

  // unixのタイムスタンプをDBのDateTime用(utc)に変える
  unixToDbDate(date: dateType) {
    const timeStamp = (date as number) * 1000
    return this.getUtcTime(timeStamp).format('YYYY-MM-DD HH:mm:ss')
  }
}
