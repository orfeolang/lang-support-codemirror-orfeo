import { parser } from './syntax.grammar'
import { LRLanguage, LanguageSupport } from '@codemirror/language'
import { styleTags, tags as t } from '@lezer/highlight'

export const OrfeoLanguage = LRLanguage.define({
  parser: parser.configure({
    props: [
      styleTags({
        LineComment: t.lineComment,
      }),
    ],
  })
})

export function Musicline() {
  return new LanguageSupport(OrfeoLanguage)
}
