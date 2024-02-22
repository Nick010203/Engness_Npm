import sanitizeHtml from 'sanitize-html';

export const sanitizeHtmlString = (html: string) => {
  const cleanHtml = sanitizeHtml(html)
  if (cleanHtml) {
    // 改行は \n に変換する
    return cleanHtml.replace(/\n/g, '\\n')
  }

  return ""
}