import React from 'react';
import renderer from 'react-test-renderer';

import ProductImage from '../index';

describe('(Component) ProductImage', () => {
  const defaultProps = {
    src: 'src',
  };
  
  test('should pass snapshot test', () => {
    const wrapper = renderer.create(<ProductImage {...defaultProps} />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
