// 参考: https://github.com/prisma/prisma/issues/6980#:~:text=WhereInput%3C%27User%27%3E.-,Alternatives,-There%20is%20quite

import * as p from '@prisma/client'

type ModelDelegates = {
  [K in p.Prisma.ModelName]: p.PrismaClient[Uncapitalize<K>]
}

type WhereInput<T> = T extends Model<Record<string, unknown>, p.Prisma.ModelName>
  ? Exclude<Parameters<ModelDelegates[T['kind']]['findFirst']>[0], undefined | null>['where']
  : never

type Model<T extends Record<string, unknown>, TName extends string> = T & { kind: TName }

// ジェネリックなwhere型を定義
export type WhereQuery<T extends keyof ModelMap> = WhereInput<ModelMap[T]>

// ジェネリックなselect型を定義
export type SelectQuery<T extends keyof ModelMap> = Partial<Record<keyof ModelMap[T], boolean>>

// limit型を定義
export type LimitQuery = number

export type PrismaQueryRequest<T extends keyof ModelMap> = {
  tableName: T
  query?: {
    where?: WhereQuery<T>
    select?: SelectQuery<T> // 指定なければ全フィールド
    limit?: LimitQuery
  }
}

// ここに追加していく
export type ModelMap = {
  user: Model<p.User, 'User'>
  adminUser: Model<p.User, 'AdminUser'>
}
