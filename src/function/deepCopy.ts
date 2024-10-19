// 全部GPTに書いてもらった

export const deepCopy = <T>(obj: T, visited = new WeakMap<any, any>()): T => {
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }

  // 循環参照を検出して、すでにコピーされたオブジェクトを返す
  if (visited.has(obj)) {
    return visited.get(obj)
  }

  // Date オブジェクトのコピー
  if (obj instanceof Date) {
    return new Date(obj.getTime()) as T
  }

  // RegExp オブジェクトのコピー
  if (obj instanceof RegExp) {
    return new RegExp(obj.source, obj.flags) as T
  }

  let copy: any

  if (Array.isArray(obj)) {
    copy = []
    visited.set(obj, copy) // コピーした配列をWeakMapに登録
    for (let i = 0; i < obj.length; i++) {
      copy[i] = deepCopy(obj[i], visited)
    }
  } else {
    copy = {}
    visited.set(obj, copy) // コピーしたオブジェクトをWeakMapに登録
    // 通常のキーのコピー
    for (const key of Object.keys(obj)) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        // @ts-expect-error: objには決まった型がないので仕方ない
        copy[key] = deepCopy(obj[key], visited)
      }
    }
    // Symbolキーのコピー
    for (const symbol of Object.getOwnPropertySymbols(obj)) {
      // @ts-expect-error: objには決まった型がないので仕方ない
      copy[symbol] = deepCopy(obj[symbol], visited)
    }
  }

  return copy
}
