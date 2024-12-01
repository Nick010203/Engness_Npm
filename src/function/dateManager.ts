import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import isSameOrBefore from "dayjs/plugin/isSameOrBefore"
import isSameOrAfter from "dayjs/plugin/isSameOrAfter"
import { UserCountry } from "@prisma/client"
import { dateManagerTimeZone } from './dateManagerTimeZone'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(isSameOrBefore)
dayjs.extend(isSameOrAfter)

type dateType = string | number | Date | dayjs.Dayjs

export class dateManager {
  currentTime: dayjs.Dayjs
  constructor(country: UserCountry | null = null) {
    const timeZone = country ? dateManagerTimeZone[country] : null
    this.currentTime = timeZone ? dayjs().tz(timeZone) : dayjs().utc()
  }

  getUtcCurrentTime() {
    return this.currentTime
  }

  getJstCurrentTime() {
    return this.convertUtcToJst(this.currentTime)
  }

  getUtcTime(date: dateType) {
    return dayjs(date).utc()
  }

  // UTCの時刻をJSTに変換 (使う側でformat)
  convertUtcToJst(utcDate: dateType): dayjs.Dayjs {
    const dayjsDate = dayjs(utcDate)
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
