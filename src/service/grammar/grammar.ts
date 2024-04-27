import { Grade, Grammar, GrammarQuestion, LikeGrammarQuestion } from "@prisma/client"

export type TypeAssertedGrammarQuestion = Omit<GrammarQuestion, "question"> & { "question": Record<"q1" | "q2" | "q3" | "q4" | "q5" | "q6", string>[] | undefined } & { LikeGrammarQuestion: LikeGrammarQuestion[] }

export type gradeWithGrammarList = Grade & {
  Grammar: Grammar[]
}

export type grammarWithGradeAndGrammarQuestion = Grammar & {
  Grade: Grade,
  GrammarQuestion: Partial<TypeAssertedGrammarQuestion>[] & {
    LikeGrammarQuestion?: LikeGrammarQuestion[]
  }
}

export type grammarQuestionWithGradeAndGrammar = Partial<TypeAssertedGrammarQuestion> & {
  Grammar: Partial<Grammar> & {
    Grade: Grade,
  } & {
    LikeGrammarQuestion?: LikeGrammarQuestion[]
  }

}