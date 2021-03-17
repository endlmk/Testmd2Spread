import MarkdownIt from 'markdown-it'
import markdownItTaskLists from 'markdown-it-task-lists'
import { readFileSync } from 'fs'

var md = MarkdownIt().use(markdownItTaskLists);
var contents = readFileSync('test.md', 'utf8')

var result = md.parse(contents, {}); // Type error occcured without 2nd argument.
console.log(result)