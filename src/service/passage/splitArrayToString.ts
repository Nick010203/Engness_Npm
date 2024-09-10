
// 配列から , で区切られた文字列を作る
const splitArrayToString = (arrOrStr: Array<string> | string) => {
  return Array.isArray(arrOrStr)
    ? arrOrStr.join(', ')
    : arrOrStr ?? ''
}