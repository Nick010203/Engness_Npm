
export const isValidString = (stringArg: string) => {
  if (!stringArg || stringArg === 'undefined' || stringArg === 'null') {
    return false
  }
  return true
}