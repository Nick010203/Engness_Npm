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
  const includedInWordCountClass = ['passage-under-line-1',
    'passage-under-line-2',
    'passage-under-line-3',
    'passage-under-line-4',
    'passage-under-line-5',
    'english-word-annotation']
  return sanitizeHtml(passageSentence, {
    exclusiveFilter: function (frame) {
      // spanに特定のclassがついていればspanタグをsanitizeするだけ、それ以外のspanタグはspanタグの中身ごとスキップ
      return !(frame.tag === 'span' && !includedInWordCountClass?.includes(frame.attribs.class))
    }
  })
}