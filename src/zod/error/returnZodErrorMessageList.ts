import { SafeParseReturnType } from "zod"
import zodErrorMessageMap, { zodErrorType } from "./zodErrorMessageMap"

// z.string().max(7, { message: "must be 7 letters" }).regex(userNameRegex, { message: "regex error" })
// みたいに複数の条件で検証している可能性もあるので配列で返す

export const returnZodErrorMessageList = (result: SafeParseReturnType<any, any>, lang: "jp" | "en" = "jp") => {

  if ("error" in result) {
    const errorIssueList = result.error.issues
    return errorIssueList.map((e) => {
      return zodErrorMessageMap[e.message as zodErrorType]?.[lang] ?? "入力値検証エラー"
    })
  }

  // return nothing
  return []
}