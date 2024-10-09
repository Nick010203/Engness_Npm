
// zodのmessageに入れる e.g. z.string().regex(userNameRegex, { message: "userNameRegex" })
export type zodErrorType = "userNameRegex" | "userNameMax" | "zodEmailError" | "zodPasswordRegex"

const zodErrorMessageMap: { [key in zodErrorType]: { en: string, jp: string } } = {
  userNameRegex: {
    en: "Using invalid characters",
    jp: "使用できない文字が含まれます"
  },
  userNameMax: {
    en: "Must be up to 7 characters",
    jp: "ユーザー名は7文字まで"
  },
  zodEmailError: {
    en: "Invalid Email",
    jp: "メールアドレスが不正"
  },
  zodPasswordRegex: {
    en: "Only a-zA-Z0-9-_",
    jp: "a-zA-Z0-9-_ のみ"
  }
}

export default zodErrorMessageMap