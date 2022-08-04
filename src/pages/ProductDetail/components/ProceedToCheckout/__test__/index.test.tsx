import React from 'react';
import renderer from 'react-test-renderer';

import ProceedToCheckout from '../index';

describe('(Component) ProceedToCheckout', () => {
  const defaultProps = {
    price: 1332,
    shippingFee: 'included'
  };
  test('should pass snapshot test', () => {
    const wrapper = renderer.create(<ProceedToCheckout {...defaultProps} />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
