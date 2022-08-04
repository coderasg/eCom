import React from 'react';
import renderer from 'react-test-renderer';

import CommentCount from '../index';

describe('(Component) CommentCount', () => {
  const defaultProps = {
    count: 1,
  };

  test('should pass snapshot test', () => {
    const wrapper = renderer.create(<CommentCount {...defaultProps} />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
