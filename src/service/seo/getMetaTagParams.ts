type GrammarSeo = "grammarList" | "singleGrammar" | "singleGrammarQuestion"
type ShopSeo = "singleProduct"
type PassageSeo = "singlePassage"

export type getMetaTagPurpose = GrammarSeo | ShopSeo | PassageSeo

export type Params<T> =
  T extends "grammarList" ? { gradeId: number } :
  T extends "singleGrammar" ? { grammarId: number } :
  T extends "singleGrammarQuestion" ? { qId: number } :
  T extends "singleProduct" ? { productId: number } :
  T extends "singlePassage" ? { passageId: number } :
  never;

export type getMetaTagParams<T extends getMetaTagPurpose> = {
  purpose: T,
  params: Params<T>
};

export type getMetaTagResponse = {
  title: string
  description: string
}