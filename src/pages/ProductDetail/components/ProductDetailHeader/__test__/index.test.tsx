import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import ProductDetailHeader from '../index';

describe('(Component) ProductDetailHeader', () => {
  const defaultProps = {
    title: 'test',
  };

  test('should pass snapshot test', () => {
    const wrapper = renderer.create(
      <BrowserRouter>
        <ProductDetailHeader {...defaultProps} />
      </BrowserRouter>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
