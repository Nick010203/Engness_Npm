type grammar = "grammarList" | "singleGrammar"
type listening = "singleListening"


export type getMetaTagParams = grammar & listening

export type getMetaTagResponse = {
  title: string
  description: string
}