import React from 'react';
import renderer from 'react-test-renderer';

import Header from '../index';

describe('(Component) Header', () => {
  const defaultProps = {};
  
  test('should pass snapshot test', () => {
    const wrapper = renderer.create(<Header {...defaultProps} />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
