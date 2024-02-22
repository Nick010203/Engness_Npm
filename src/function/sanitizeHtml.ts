import sanitizeHtml from 'sanitize-html';

export const sanitizeHtmlString = (html: string) => {
  const cleanHtml = sanitizeHtml(html)
  // サニタイズした結果が無効なら空の文字列になる
  return cleanHtml
}