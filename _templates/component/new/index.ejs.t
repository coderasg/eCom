---
to: <%= rootComponentDir %>/<%= h.changeCase.pascal(name) %>/index.tsx
---
import React from 'react';

type Props = {};

function <%= h.changeCase.pascal(name) %>(props: Props) {
  return <div data-testid="<%= h.changeCase.pascal(name) %>-wrapper"></div>;
}

export default <%= h.changeCase.pascal(name) %>;
