import React from 'react';
import renderer from 'react-test-renderer';

import ProductDescription from '../index';

describe('(Component) ProductDescription', () => {
  const defaultProps = {
    decription: 'Sample',
  };
  test('should pass snapshot test', () => {
    const wrapper = renderer.create(<ProductDescription {...defaultProps} />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
