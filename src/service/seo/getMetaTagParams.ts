type grammarSeo = "grammarList" | "singleGrammar"
type listeningSeo = "singleListening"


export type getMetaTagPurpose = grammarSeo | listeningSeo

// 条件型を使用して `T` に基づいて `P` の型を決定
type Params<T> =
  T extends "grammarList" ? { gradeId: number } :
  T extends "singleGrammar" ? { grammarId: number } :
  T extends "singleListening" ? { listeningId: number } :
  never;

export type getMetaTagParams<T extends getMetaTagPurpose> = {
  purpose: T,
  params: Params<T>
};

export type getMetaTagResponse = {
  title: string
  description: string
}