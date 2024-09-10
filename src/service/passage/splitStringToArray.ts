
// "apple, banana ,  cherry" のような , で区切られた文字列を配列に変換
export const splitStringToArray = (str: string) => {
  return str ? str.split(',').map((item) => item.trim()) : []
}