
export const deepCopy = <T>(obj: T, visited = new WeakMap<any, any>()): T => {
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }

  // 循環参照を検出して、すでにコピーされたオブジェクトを返す
  if (visited.has(obj)) {
    return visited.get(obj)
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
    for (const key of Object.keys(obj)) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        // @ts-expect-error: objの型が確定していないので
        copy[key] = deepCopy(obj[key], visited)
      }
    }
  }

  return copy
}