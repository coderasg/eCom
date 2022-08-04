import React from 'react';
import renderer from 'react-test-renderer';

import Input from '../index';

describe('(Component) Input', () => {
  const defaultProps = {
    value: 'searc..',
    name:'searchProduct',
    placeholder:'Search product',
    onChange:()=> {
      console.log('Input chnage');
    },
  };
  
  test('should pass snapshot test', () => {
    const wrapper = renderer.create(<Input {...defaultProps} />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
