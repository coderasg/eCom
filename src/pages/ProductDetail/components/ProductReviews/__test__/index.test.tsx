import React from 'react';
import renderer from 'react-test-renderer';

import ProductReviews from '../index';

describe('(Component) ProductReviews', () => {
  const defaultProps = {
    likeCount: 11,
    commentCount: 11
  };
  
  test('should pass snapshot test', () => {
    const wrapper = renderer.create(<ProductReviews {...defaultProps} />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
