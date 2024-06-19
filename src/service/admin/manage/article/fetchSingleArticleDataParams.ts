import { typeAssertedArticle } from "../../../../service/article/articleType"

export type fetchSingleArticleDataParams = {
  articleId: number
}

export type fetchSingleArticleDataResponse = typeAssertedArticle