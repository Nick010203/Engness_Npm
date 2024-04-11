import { Grade, Grammar, GrammarQuestion } from "@prisma/client"

export type GrammarQuestionType = Omit<GrammarQuestion, "question"> & { "question": Record<"q1" | "q2" | "q3" | "q4" | "q5" | "q6", string>[] }

export type gradeWithGrammarList = Grade & {
  Grammar: Grammar[]
}

export type grammarWithGradeAndGrammarQuestion = Grammar & {
  Grade: Grade,
  GrammarQuestion: Partial<GrammarQuestionType>[]
}

export type grammarQuestionWithGradeAndGrammar = Partial<GrammarQuestionType> & {
  Grammar: Partial<Grammar> & {
    Grade: Grade,
  }
}