import MarkdownIt from 'markdown-it/lib'
// @ts-expect-error
import markdownItTaskLists from 'markdown-it-task-lists'
import { readFileSync } from 'fs'

const md = MarkdownIt().use(markdownItTaskLists)
const contents = readFileSync('test.md', 'utf8')

const result = md.parse(contents, {}) // Type error occcured without 2nd argument.
console.log(result)

let testTitle = ''
const testSections: string[] = []
for (let index = 0; index < result.length; index++) {
  const element = result[index]
  if (element.type === 'heading_open' && element.tag === 'h1') {
    testTitle = result[index + 1].content
  }
  if (element.type === 'heading_open' && element.tag === 'h2') {
    testSections.push(result[index + 1].content)
  }
}

console.log(testTitle)
