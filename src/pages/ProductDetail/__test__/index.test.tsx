import React from 'react';
import renderer from 'react-test-renderer';

import ProductDetail from '../index';

describe('(Component) ProductDetail', () => {
  const defaultProps = {};
  test('should pass snapshot test', () => {
    const wrapper = renderer.create(<ProductDetail {...defaultProps} />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
