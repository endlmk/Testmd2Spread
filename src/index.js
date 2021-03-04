import MarkdownIt from 'markdown-it'
import { readFileSync } from 'fs'

var md = new MarkdownIt();
var contents = readFileSync('test.md', 'utf8')

var result = md.parse(contents);
console.log(result)