
// messageにzodErrorTypeを入れる
// e.g. z.string().regex(userNameRegex, { message: "userNameRegex" })

export type Required = "booleanRequired" | "stringRequired" | "numberRequired"
export type Regex = "userNameRegex" | "zodPasswordRegex"

export type User = "userNameMax"
export type Review = "reviewerName" | "reviewText" | "reviewRate"

export type zodErrorType = Required | Regex | User | Review | "zodEmailError" | "contactText"

const zodErrorMessageMap: { [key in zodErrorType]: { en: string, jp: string } } = {
  userNameRegex: {
    en: "Using invalid characters",
    jp: "使用できない文字を含む"
  },
  userNameMax: {
    en: "Must be up to 7 characters",
    jp: "ユーザー名は7文字まで"
  },
  zodEmailError: {
    en: "Invalid Email",
    jp: "不適切なメールアドレス"
  },
  zodPasswordRegex: {
    en: "Only a-zA-Z0-9-_",
    jp: "a-zA-Z0-9-_ のみ"
  },
  stringRequired: {
    en: "Required",
    jp: "入力が必須"
  },
  booleanRequired: {
    en: "Required",
    jp: "選択が必須"
  },
  numberRequired: {
    en: "Required",
    jp: "入力が必須"
  },
  contactText: {
    en: "1 to 300 words",
    jp: "1から300文字"
  },
  reviewerName: {
    en: "1 to 10 words",
    jp: "1から10文字"
  },
  reviewText: {
    en: "1 to 500 words",
    jp: "1から500文字"
  },
  reviewRate: {
    en: "1 to 5",
    jp: "1 to 5"
  },
}

export default zodErrorMessageMap