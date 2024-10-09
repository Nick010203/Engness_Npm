import { SafeParseReturnType } from "zod"

// z.string().max(7, { message: "must be 7 letters" }).regex(userNameRegex, { message: "regex error" })
// みたいに複数の条件で検証している可能性もあるので配列で返す

export const returnZodErrorMassageList = (result: SafeParseReturnType<any, any>) => {

  if ("error" in result) {
    const errorIssueList = result.error.issues
    return errorIssueList.map((e) => e.message)
  }

  // return nothing
  return []
}