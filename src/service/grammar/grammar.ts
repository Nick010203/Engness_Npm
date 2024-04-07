import { Grade, Grammar, GrammarQuestion } from "@prisma/client"

export type gradeWithGrammarList = Grade & {
  Grammar: Grammar
}