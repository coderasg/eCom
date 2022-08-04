---
to: <%= rootComponentDir %>/<%= h.changeCase.pascal(name) %>/__test__/index.test.tsx
---
import React from 'react';
import renderer from 'react-test-renderer';

import <%= h.changeCase.pascal(name) %> from '../index';

describe('(Component) <%= h.changeCase.pascal(name) %>', () => {
  const defaultProps = {
    sampleProps: 'Sample',
  };
  test('should pass snapshot test', () => {
    const wrapper = renderer.create(<<%= h.changeCase.pascal(name) %> {...defaultProps} />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
