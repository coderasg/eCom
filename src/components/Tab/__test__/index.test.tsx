import React from 'react';
import renderer from 'react-test-renderer';

import Tab from '../index';

describe('(Component) Tab', () => {
  const defaultProps = {
    name: 'test',
    isSelected: true,
    handleTabClick: () => {
      alert('tab');
    },
  };

  test('should pass snapshot test', () => {
    const wrapper = renderer.create(<Tab {...defaultProps} />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
