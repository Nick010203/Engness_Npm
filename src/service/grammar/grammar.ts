import { Grade, Grammar, GrammarQuestion } from "@prisma/client"

export type gradeWithGrammarList = Grade & {
  Grammar: Grammar[]
}

export type grammarWithGradeAndGrammarQuestion = Grammar & {
  Grade: Grade,
  GrammarQuestion: Partial<GrammarQuestion>[]
}

export type grammarQuestionWithGradeAndGrammar = Partial<GrammarQuestion> & {
  Grammar: Partial<Grammar> & {
    Grade: Grade,
  }
}