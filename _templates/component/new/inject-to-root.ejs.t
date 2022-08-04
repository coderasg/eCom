---
to: <%= rootComponentDir %>/index.ts
inject: true
append: true
---
export { default as <%= h.changeCase.pascal(name) %> } from './<%= h.changeCase.pascal(name) %>';