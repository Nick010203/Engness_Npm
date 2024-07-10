import { Grade } from "@prisma/client"

export type fetchGradeListResponse = {
  grade: Grade[]
}