// 指定したフィールドのユニオン型 T を必須にして、それ以外のフィールドをオプショナルにする
export type SplitFieldsIntoNecessaryAndOptional<
  Obj extends Record<string, any>,
  T extends keyof Obj,
> =
  // T を必須フィールドとして残す
  Pick<Obj, T> &
  // T 以外のキーをオプショナルにする
  Partial<Omit<Obj, T>>