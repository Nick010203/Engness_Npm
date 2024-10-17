import sanitizeHtml from 'sanitize-html';

const commonAttributes = ["class", "id", "style"]

export const sanitizeHtmlString = (html: string) => {
  const cleanHtml = sanitizeHtml(html)
  // サニタイズした結果が無効なら空の文字列になる
  return cleanHtml
}

export const sanitizeArticleBody = (html: string) => {
  return sanitizeHtml(html, {
    allowedTags: ['p', 'a', "h1", "h2", "h3", "span", "i", "ul", "li", "br", "img"],
    allowedAttributes: {
      a: ['href', 'rel', 'target'],
      "*": [...commonAttributes],
    },
    allowedIframeHostnames: ['www.youtube.com', 'youtube.com']
  }
  )
}

export const sanitizeAmazonProductImageTag = (htmlImgTag: string) => {
  return sanitizeHtml(htmlImgTag, {
    allowedTags: ["img"],
    allowedAttributes: {
      img: ['alt', 'src', 'data-old-hires'],
      "*": [...commonAttributes],
    },
  }
  )
}

export const sanitizePassageSentenceToCountWords = (passageSentence: string) => {
  return sanitizeHtml(passageSentence, {
    exclusiveFilter: function (frame) {
      return (frame.tag === 'span'); // spanタグを削除
    }
  })
}