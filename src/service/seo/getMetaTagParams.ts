type grammarSeo = "grammarList" | "singleGrammar" | "singleGrammarQuestion"
type shopSeo = "singleProduct"

export type getMetaTagPurpose = grammarSeo | shopSeo

export type Params<T> =
  T extends "grammarList" ? { gradeId: number } :
  T extends "singleGrammar" ? { grammarId: number } :
  T extends "singleGrammarQuestion" ? { qId: number } :
  T extends "singleProduct" ? { productId: number } :
  never;

export type getMetaTagParams<T extends getMetaTagPurpose> = {
  purpose: T,
  params: Params<T>
};

export type getMetaTagResponse = {
  title: string
  description: string
}