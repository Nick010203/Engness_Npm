import { typeAssertedArticle } from "src/service/article/articleType"

export type fetchSingleArticleDataParams = {
  articleId: number
}

export type fetchSingleArticleDataResponse = typeAssertedArticle