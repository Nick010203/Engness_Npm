// 参考: https://github.com/prisma/prisma/issues/6980#issue-878506022

// createとかのモデル操作のメソッドをやるなら参考: https://github.com/prisma/prisma/discussions/3929#discussioncomment-6635241

import * as p from '@prisma/client'

type ModelDelegates = {
  [K in p.Prisma.ModelName]: p.PrismaClient[Uncapitalize<K>]
}

type WhereInput<T> = T extends Model<Record<string, unknown>, p.Prisma.ModelName>
  ? Exclude<Parameters<ModelDelegates[T['kind']]['findFirst']>[0], undefined | null>['where']
  : never

type SelectInput<T> = T extends Model<Record<string, unknown>, p.Prisma.ModelName>
  ? Exclude<Parameters<ModelDelegates[T['kind']]['findFirst']>[0], undefined | null>['select']
  : never

type IncludeInput<T> = T extends Model<Record<string, unknown>, p.Prisma.ModelName>
  ? Exclude<Parameters<ModelDelegates[T['kind']]['findFirst']>[0], undefined | null>
  : never


type Model<T extends Record<string, unknown>, TName extends string> = T & { kind: TName }

// ジェネリックなwhere型を定義
export type WhereQuery<T extends keyof ModelMap> = WhereInput<ModelMap[T]>

// ジェネリックなselect型を定義
export type SelectQuery<T extends keyof ModelMap> = SelectInput<ModelMap[T]>

// ジェネリックなinclude型を定義 (たまたま成功した...)
export type includeQuery<T extends keyof ModelMap> = Exclude<IncludeInput<ModelMap[T]>["include"], undefined | null>


// limit型を定義
export type LimitQuery = number

export type PrismaQueryRequest<T extends keyof ModelMap> = {
  tableName: T
  query?: {
    where?: WhereQuery<T>
    select?: SelectQuery<T> // 指定なければ全フィールド
    limit?: LimitQuery
    include?: includeQuery<T>
  }
}

export const dashboardAccessibleTableList: Partial<Uncapitalize<p.Prisma.ModelName>>[] = ["user", "adminUser"]

// ここに追加していく
export type ModelMap = {
  user: Model<p.User, 'User'>
  adminUser: Model<p.AdminUser, 'AdminUser'>
}
