import React, {ChangeEvent} from 'react';
import renderer from 'react-test-renderer';

import TopPageHeader from '../index';

describe('(Component) TopPageHeader', () => {
  const defaultProps = {
    searchStr: 'search',
    handleOnSearchChange: (value: string) => {
      console.log(value);
    }
  };
  
  test('should pass snapshot test', () => {
    const wrapper = renderer.create(<TopPageHeader {...defaultProps} />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
