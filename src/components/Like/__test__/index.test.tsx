import React from 'react';
import renderer from 'react-test-renderer';

import Like from '../index';

describe('(Component) Like', () => {
  const defaultProps = {
    count: 12
  };
  
  test('should pass snapshot test', () => {
    const wrapper = renderer.create(<Like {...defaultProps} />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
