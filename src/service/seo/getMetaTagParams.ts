type grammarSeo = "grammarList" | "singleGrammar"
type listeningSeo = "singleListening"


export type getMetaTagParams = grammarSeo | listeningSeo

export type getMetaTagResponse = {
  title: string
  description: string
}