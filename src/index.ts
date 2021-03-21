import MarkdownIt from 'markdown-it/lib'
// @ts-expect-error
import markdownItTaskLists from 'markdown-it-task-lists'
import { readFileSync } from 'fs'

const md = MarkdownIt().use(markdownItTaskLists)
const contents = readFileSync('test.md', 'utf8')

const result = md.parse(contents, {}) // Type error occcured without 2nd argument.
console.log(result)
